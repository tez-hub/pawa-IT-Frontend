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
  if (!history.length) return null;

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 max-h-[70vh] sm:max-h-[55vh] overflow-y-auto mb-4 border border-gray-200 space-y-6">
      {history.map((entry, i) => (
        <div key={i} className="space-y-3">
          {/* User message */}
          <div className="flex justify-start">
            <div className="max-w-[75%] bg-blue-100 text-blue-800 px-4 py-2 rounded-2xl rounded-bl-sm shadow-sm">
              <p className="text-sm font-medium">You</p>
              <p className="mt-1">{entry.question}</p>
            </div>
          </div>

          {/* Assistant message */}
          <div className="flex justify-end">
            <div className="max-w-[75%] bg-green-100 text-green-800 px-4 py-2 rounded-2xl rounded-br-sm shadow-sm">
              <p className="text-sm font-medium text-right">Assistant</p>
              <ReactMarkdown>
                {entry.response}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
