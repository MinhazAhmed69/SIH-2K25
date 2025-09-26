// app/groups/chat/[id]/page.tsx
'use client';

import { useState, type FormEvent } from 'react';
import { PaperClipIcon, MicrophoneIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { ChatBubble } from '@/components/chatBubble';

type ChatPageProps = {
  params: {
    id: string;
  };
};

export default function ChatPage({ params }: ChatPageProps) {
  const { id } = params;
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello team, quick update on the current deployment.', isSelf: false },
    { id: 2, text: 'Understood. Is the perimeter secure?', isSelf: true },
    { id: 3, text: 'Affirmative. The area is clear.', isSelf: false },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        isSelf: true,
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-400 text-white">
      <header className="flex items-center justify-between p-4 bg-gray-800 shadow-md">
        <h1 className="text-xl font-bold text-gray-100">Group: {id}</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-white">Secure</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zM6.75 6.75a4.5 4.5 0 019 0v3h-9v-3z" clipRule="evenodd" />
          </svg>
        </div>
      </header>
      <main className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map(msg => (
          <ChatBubble key={msg.id} message={msg.text} isSelf={msg.isSelf} />
        ))}
      </main>
      <div className="p-4 bg-gray-800 shadow-md">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <button type="button" className="text-gray-400 hover:text-white">
            <PaperClipIcon className="h-6 w-6" />
          </button>
          <button type="button" className="text-gray-400 hover:text-white">
            <MicrophoneIcon className="h-6 w-6" />
          </button>
          <input
            type="text"
            className="flex-1 px-4 py-2 bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 focus:outline-none"
          >
            <ArrowRightIcon className="h-6 w-6" />
          </button>
        </form>
      </div>
    </div>
  );
}