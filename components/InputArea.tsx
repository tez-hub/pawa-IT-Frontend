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
    <div className="flex flex-col sm:flex-row gap-2">
      <textarea
        className="w-full border p-2 rounded-md"
        rows={3}
        placeholder="Ask your travel question..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
};

export default InputArea;
