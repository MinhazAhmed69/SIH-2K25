
// components/ChatBubble.tsx
'use client';

type ChatBubbleProps = {
  message: string;
  isSelf: boolean;
};

export const ChatBubble = ({ message, isSelf }: ChatBubbleProps) => {
  // Modern avatar (could be replaced with user image)
  const avatar = (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg
      ${isSelf ? 'bg-[#2d4739] text-white' : 'bg-[#e6ece7] text-[#2d4739]'}
    `}>
      {isSelf ? 'U' : 'A'}
    </div>
  );

  // Timestamp inside bubble, right-aligned for self, left for others
  const timestamp = (
    <span className={`text-[11px] font-semibold ml-2 select-none ${isSelf ? 'text-[#b2b6b1]/80' : 'text-[#2d4739]/70'}`}>12:34</span>
  );

  return (
    <div className={`flex ${isSelf ? 'justify-end' : 'justify-start'} my-4 px-3`}>
      <div className={`flex items-end gap-3 ${isSelf ? 'flex-row-reverse' : ''}`}>
        {avatar}
        <div className="flex flex-col items-end max-w-[70vw]">
          <div
            className={`relative px-6 py-3 rounded-2xl shadow-lg text-base font-semibold tracking-tight
              ${isSelf
                ? 'bg-[#2d4739] text-white rounded-br-3xl'
                : 'bg-[#e6ece7] text-[#2d4739] border-2 border-[#b2b6b1] rounded-bl-3xl'}
              flex items-end min-w-[60px]`
            }
            style={{ wordBreak: 'break-word', minHeight: '44px' }}
          >
            <span className="flex-1 pr-2">{message}</span>
            {timestamp}
            {/* Tail */}
            {isSelf ? (
              <svg
                className="absolute right-[-12px] bottom-0"
                width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0 C12 12, 12 16, 18 28" fill="#2d4739" />
              </svg>
            ) : (
              <svg
                className="absolute left-[-12px] bottom-0"
                width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 0 C6 12, 6 16, 0 28" fill="#e6ece7" stroke="#b2b6b1" strokeWidth="1.5" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};