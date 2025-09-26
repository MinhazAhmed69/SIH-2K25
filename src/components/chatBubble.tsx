
// components/ChatBubble.tsx
'use client';

type ChatBubbleProps = {
  message: string;
  isSelf: boolean;
};

export const ChatBubble = ({ message, isSelf }: ChatBubbleProps) => {
  return (
    <div className={`flex ${isSelf ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs px-4 py-2 rounded-lg ${
        isSelf ? 'bg-gray-700 text-white rounded-tr-none' : 'bg-gray-200 text-gray-800 rounded-tl-none'
      }`}>
        <p>{message}</p>
      </div>
    </div>
  );
};