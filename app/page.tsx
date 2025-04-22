"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ChatBox from "../components/ChatBox";
import InputArea from "../components/InputArea";
import { sendQuestion, fetchHistory } from "../apiCalls/api";

interface ChatEntry {
  question: string;
  response: string;
}

const App: React.FC = () => {
  const [history, setHistory] = useState<ChatEntry[]>([]);
  const router = useRouter();

  const handleSend = async (question: string) => {
    const response = await sendQuestion(question);
    if (response) {
      const newEntry: ChatEntry = { question, response };
      setHistory((prev) => [...prev, newEntry]);
    }
  };

  const loadHistory = async () => {
    const data: ChatEntry[] = await fetchHistory();
    setHistory(data.reverse()); // newest first
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Travel Assistant</h1>
        <ChatBox history={history} />
        <InputArea onSend={handleSend} />
      </div>
    </div>
  );
};

export default App;
