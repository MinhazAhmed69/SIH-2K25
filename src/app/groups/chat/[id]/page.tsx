// app/groups/chat/[id]/page.tsx
'use client';

import { useState, useRef, type FormEvent, use } from 'react';
import { PaperClipIcon, MicrophoneIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { ChatBubble } from '@/components/chatBubble';

type ChatPageProps = {
  params: {
    id: string;
  };
};

export default function ChatPage({ params }: ChatPageProps) {
  // Next.js 15+ params is a Promise, unwrap with use() and cast as Promise
  const { id } = use(params as unknown as Promise<{ id: string }>);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello team, quick update on the current deployment.', isSelf: false },
    { id: 2, text: 'Understood. Is the perimeter secure?', isSelf: true },
    { id: 3, text: 'Affirmative. The area is clear.', isSelf: false },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isListening, setIsListening] = useState(false);


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

  // Handle file attachment
  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newMessage = {
        id: messages.length + 1,
        text: `📎 Attachment: ${file.name}`,
        isSelf: true,
      };
      setMessages([...messages, newMessage]);
    }
  };

  // Voice typing using Web Speech API
  const handleMicClick = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    setIsListening(true);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputMessage(transcript);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  return (
    <div className="flex flex-col h-screen relative text-gray-900 dark:text-[#f5f6f4]">
      {/* Modern chat background: soft green/grey gradient with subtle pattern, dark mode supported */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#e6ece7] via-[#f5f6f4] to-[#b2b6b1] dark:from-[#3a3f3d] dark:via-[#232726] dark:to-[#4a6352]">
        <svg width='100%' height='100%' className='absolute inset-0 opacity-10' style={{pointerEvents:'none'}}>
          <defs>
            <pattern id='chatdots' x='0' y='0' width='36' height='36' patternUnits='userSpaceOnUse'>
              <circle cx='2' cy='2' r='1.5' fill='#b2b6b1' />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#chatdots)' />
        </svg>
      </div>
      <header className="flex items-center justify-between p-4 bg-transparent shadow-none rounded-none">
        <h1 className="text-xl font-bold text-[#2d4739] dark:text-[#b2b6b1] tracking-tight">Group: {id}</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-[#2d4739] dark:text-[#b2b6b1]">Secure</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#2d4739] dark:text-[#b2b6b1]">
            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zM6.75 6.75a4.5 4.5 0 019 0v3h-9v-3z" clipRule="evenodd" />
          </svg>
        </div>
      </header>
      <main className="flex-1 px-0 py-6 overflow-y-auto flex flex-col gap-2 md:gap-4">
        <div className="flex flex-col gap-1 md:gap-2 max-w-2xl mx-auto w-full">
          {messages.map(msg => (
            <ChatBubble key={msg.id} message={msg.text} isSelf={msg.isSelf} />
          ))}
        </div>
      </main>
  <div className="p-4 bg-transparent shadow-none rounded-none">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2 md:gap-3">
          {/* Paperclip for attachments */}
          <button type="button" className="text-[#2d4739] dark:text-[#b2b6b1] hover:text-[#1e2d23] transition-colors" onClick={handleAttachmentClick} title="Attach file">
            <PaperClipIcon className="h-6 w-6" />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          {/* Microphone for voice typing */}
          <button type="button" className={`text-[#2d4739] dark:text-[#b2b6b1] hover:text-[#1e2d23] transition-colors ${isListening ? 'animate-pulse' : ''}`} onClick={handleMicClick} title="Voice typing">
            <MicrophoneIcon className="h-6 w-6" />
          </button>
          <input
            type="text"
            className="flex-1 px-4 py-2 bg-white dark:bg-[#232726] rounded-full focus:outline-none focus:ring-2 focus:ring-[#2d4739] dark:focus:ring-[#b2b6b1] text-gray-900 dark:text-[#f5f6f4] shadow-md border border-[#2d4739] dark:border-[#b2b6b1]"
            placeholder={isListening ? 'Listening...' : 'Type a message...'}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            autoComplete="off"
          />
          <button
            type="submit"
            className="p-2 bg-[#2d4739] dark:bg-[#b2b6b1] rounded-full text-white dark:text-[#232726] hover:bg-[#1e2d23] dark:hover:bg-[#e6ece7] focus:outline-none shadow-md transition-colors"
          >
            <ArrowRightIcon className="h-6 w-6" />
          </button>
        </form>
      </div>
    </div>
  );
}