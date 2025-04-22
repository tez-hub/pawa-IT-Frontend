import React from "react";
import ReactMarkdown from "react-markdown";

interface ChatEntry {
  question: string;
  response: string;
}

interface ChatBoxProps {
  history: ChatEntry[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ history }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 h-[30rem] overflow-y-auto mb-4">
      {history.map((entry, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold text-blue-600">You:</p>
          <p>{entry.question}</p>
          <p className="font-semibold text-green-600 mt-2">Assistant:</p>
          <ReactMarkdown>{entry.response}</ReactMarkdown>
          <hr className="my-2" />
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
