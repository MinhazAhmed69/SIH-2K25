// app/groups/page.tsx
'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MagnifyingGlassIcon, UsersIcon } from '@heroicons/react/24/solid';

const groups = [
  {
    id: '1',
    name: '7th Infantry Battalion',
    members: 154,
    status: 'approved',
    description: 'Frontline infantry unit with rapid deployment capability.',
    lastActivity: 'Active 2 min ago',
    type: 'Infantry'
  },
  {
    id: '2',
    name: 'Family Support Group - Pune',
    members: 87,
    status: 'approved',
    description: 'Support and resources for families of deployed personnel.',
    lastActivity: 'Active 10 min ago',
    type: 'Support'
  },
  {
    id: '3',
    name: 'Technical Ops Unit - North',
    members: 45,
    status: 'pending',
    description: 'Specialized technical operations and logistics.',
    lastActivity: 'Active 1 hr ago',
    type: 'Technical'
  },
  {
    id: '4',
    name: 'Signals Regiment',
    members: 62,
    status: 'approved',
    description: 'Military communications and signals intelligence.',
    lastActivity: 'Active 5 min ago',
    type: 'Signals'
  },
  {
    id: '5',
    name: 'Logistics Command',
    members: 120,
    status: 'pending',
    description: 'Supply chain and logistics for field units.',
    lastActivity: 'Active 20 min ago',
    type: 'Logistics'
  },
  {
    id: '6',
    name: 'Medical Corps',
    members: 38,
    status: 'approved',
    description: 'Medical support and field hospitals.',
    lastActivity: 'Active 3 min ago',
    type: 'Medical'
  },
  {
    id: '7',
    name: 'Cyber Defence Cell',
    members: 29,
    status: 'pending',
    description: 'Cybersecurity and digital operations.',
    lastActivity: 'Active 15 min ago',
    type: 'Cyber'
  },
  {
    id: '8',
    name: 'Artillery Brigade',
    members: 77,
    status: 'approved',
    description: 'Heavy artillery and fire support.',
    lastActivity: 'Active 8 min ago',
    type: 'Artillery'
  },
  {
    id: '9',
    name: 'Reconnaissance Unit',
    members: 24,
    status: 'pending',
    description: 'Recon and intelligence gathering.',
    lastActivity: 'Active 30 min ago',
    type: 'Recon'
  },
];

export default function GroupsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${darkMode
      ? 'bg-gradient-to-br from-[#3a3f3d] via-[#232726] to-[#4a6352] text-[#f5f6f4]'
      : 'bg-gradient-to-br from-[#f5f6f4] via-[#e6ece7] to-[#b2b6b1] text-[#1e293b]'} font-sans`}
    >
      <header className={`px-8 py-8 shadow-md border-b flex flex-col items-center justify-center gap-2 transition-colors duration-300
        ${darkMode
          ? 'bg-gradient-to-r from-[#3a3f3d] via-[#232726] to-[#4a6352] border-[#2d4739]'
          : 'bg-gradient-to-r from-[#e6ece7] via-[#b2b6b1] to-[#2d4739] border-[#2d4739]'} `}
      >
        <div className="relative w-full flex items-center justify-center mb-2">
          {/* ...existing code... */}
          <div className="absolute left-0 flex items-center h-full">
            {/* Sun/Moon slider toggle */}
            <label className="flex items-center cursor-pointer select-none">
              <input
                type="checkbox"
                checked={!darkMode}
                onChange={() => setDarkMode((d) => !d)}
                className="sr-only"
                aria-label="Toggle light/dark mode"
              />
              <span className={`relative w-12 h-6 flex items-center ${darkMode ? 'bg-[#b2b6b1]' : 'bg-[#e6ece7]'} rounded-full p-1 transition-colors duration-300 border border-[#b2b6b1]`}>
                <span className="absolute left-1 top-1 w-4 h-4 flex items-center justify-center">
                  {/* Sun icon */}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="5" fill="#facc15" />
                    <g stroke="#facc15">
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                  </svg>
                </span>
                <span className="absolute right-1 top-1 w-4 h-4 flex items-center justify-center">
                  {/* Moon icon */}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="#64748b" />
                  </svg>
                </span>
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ${darkMode ? '' : 'translate-x-6'}`}
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.15)' }}
                />
              </span>
            </label>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill={darkMode ? '#2d4739' : '#e6ece7'} />
                <path d="M18 8L26 12V20C26 25 18 28 18 28C18 28 10 25 10 20V12L18 8Z" fill={darkMode ? '#b2b6b1' : '#2d4739'} stroke={darkMode ? '#f5f6f4' : '#2d4739'} strokeWidth="1.5"/>
                <text x="18" y="23" textAnchor="middle" fill={darkMode ? '#181c1b' : '#2d4739'} fontSize="10" fontWeight="bold">K</text>
              </svg>
              <h1 className={`text-3xl font-extrabold tracking-tight uppercase drop-shadow ${darkMode ? 'text-white' : 'text-[#2d4739]'}`}>Kavach</h1>
            </div>
            <p className={`text-lg font-medium tracking-wide text-center max-w-2xl mt-1 ${darkMode ? 'text-[#b2b6b1]/90' : 'text-[#2d4739]/90'}`}>
              India’s Secure Defence Chatting Platform
            </p>
            <span className={`font-medium text-base opacity-90 mt-2 ${darkMode ? 'text-[#b2b6b1]' : 'text-[#2d4739]'}`}>{groups.length} Secure Groups</span>
          </div>
        </div>
      </header>
      <main className="flex-1 p-8">
        <div className="mb-10 relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className={`h-5 w-5 opacity-80 ${darkMode ? 'text-[#b2b6b1]' : 'text-[#2d4739]'}`} />
          </div>
          <input
            type="text"
            className={`w-full px-5 py-2.5 pl-12 rounded-lg focus:outline-none shadow text-base transition border ${darkMode
              ? 'bg-[#181c1b] border-[#b2b6b1] focus:ring-2 focus:ring-[#b2b6b1] text-[#f5f6f4] placeholder:text-[#b2b6b1]/60'
              : 'bg-white/90 border-[#b2b6b1] focus:ring-2 focus:ring-[#2d4739] text-[#1e293b] placeholder:text-[#2d4739]/60 backdrop-blur-md'}`}
            placeholder="Search for a group..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filteredGroups.map((group, idx) => {
            // Card backgrounds for light/dark mode
            const cardBg = darkMode
              ? [
                  'bg-[#3a3f3d] border-[#b2b6b1]',
                  'bg-[#4a6352] border-[#b2b6b1]',
                ][idx % 2]
              : [
                  'bg-white/90 border-[#b2b6b1]',
                  'bg-[#e6ece7] border-[#b2b6b1]',
                ][idx % 2];
            const hoverBg = darkMode
              ? 'hover:border-[#f5f6f4] hover:shadow-2xl'
              : 'hover:border-[#2d4739] hover:shadow-lg hover:-translate-y-1';
            const textColor = darkMode ? 'text-[#f5f6f4]' : 'text-[#2d4739]';
            const subTextColor = darkMode ? 'text-[#b2b6b1]' : 'text-[#4b5563]';
            return (
              <motion.div
                key={group.id}
                className={`p-8 rounded-2xl shadow-lg flex flex-col justify-between border transition-all duration-200 ${cardBg} ${hoverBg}`}
                style={{minHeight:'240px'}}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <UsersIcon className={`h-6 w-6 ${textColor} opacity-90`} />
                  <h3 className={`text-lg font-bold tracking-tight ${textColor}`}>{group.name}</h3>
                </div>
                <div className="flex-1 flex flex-col gap-2 justify-end">
                  <span className={`text-sm font-medium ${subTextColor}`}>{group.members} members</span>
                  <span className={`text-xs ${subTextColor}`}>{group.type} • {group.lastActivity}</span>
                  <span className={`text-xs italic ${subTextColor}`}>{group.description}</span>
                </div>
                <div className="mt-6">
                  {group.status === 'approved' ? (
                    <Link 
                      href={`/groups/chat/${group.id}`} 
                      className={`block w-full text-center py-2 px-4 rounded-md font-semibold text-base shadow focus:outline-none focus:ring-2 ${darkMode
                        ? 'focus:ring-[#b2b6b1] bg-[#2d4739] text-[#f5f6f4] hover:bg-[#1e2d23] hover:text-[#f5f6f4] border-2 border-[#b2b6b1]'
                        : 'focus:ring-[#2d4739] bg-[#b2b6b1] text-[#2d4739] hover:bg-[#2d4739] hover:text-[#f5f6f4] border-2 border-[#2d4739]'} `}
                    >
                      Enter Group
                    </Link>
                  ) : (
                    <button
                      className={`block w-full text-center py-2 px-4 rounded-md font-semibold text-base shadow focus:outline-none focus:ring-2 ${darkMode
                        ? 'focus:ring-[#b2b6b1] bg-[#181c1b] text-[#b2b6b1] hover:bg-[#2d4739] hover:text-[#f5f6f4] border-2 border-[#b2b6b1]'
                        : 'focus:ring-[#2d4739] bg-[#f5f6f4] text-[#2d4739] hover:bg-[#b2b6b1] hover:text-[#2d4739] border-2 border-[#2d4739]'} `}
                      onClick={() => toast.success('Request to join sent!')}
                    >
                      Request to Join
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}