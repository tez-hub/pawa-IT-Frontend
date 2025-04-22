"use client";

import React, { useState } from "react";

interface InputAreaProps {
  onSend: (text: string) => void;
}

const InputArea: React.FC<InputAreaProps> = ({ onSend }) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className="border border-gray-300 rounded-xl p-2 shadow-sm bg-white">
      <div className="flex items-end">
        <textarea
          className="flex-grow p-3 text-gray-700 bg-transparent outline-none resize-none placeholder-gray-400"
          rows={3}
          placeholder="Ask anything about your travel plans..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="ml-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default InputArea;
