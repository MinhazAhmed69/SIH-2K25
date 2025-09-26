// app/groups/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const groups = [
  { id: '1', name: '7th Infantry Battalion', members: 154, status: 'approved' },
  { id: '2', name: 'Family Support Group - Pune', members: 87, status: 'approved' },
  { id: '3', name: 'Technical Ops Unit - North', members: 45, status: 'pending' },
];

export default function GroupsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-light-gray text-dark-gray">
      <header className="p-4 bg-gray-400 shadow-md">
        <h1 className="text-2xl font-bold text-black">Your Secure Groups</h1>
      </header>
      <main className="flex-1 p-8">
       <div className="mb-6 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="w-full px-4 py-2 pl-10 bg-white border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-dark-gray"
            placeholder="Search for a group..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map(group => (
            <div key={group.id} className="p-6 bg-white rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl text-dark-gray font-semibold">{group.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{group.members} members</p>
              </div>
              <div className="mt-4">
                {group.status === 'approved' ? (
                  <Link 
                    href={`/groups/chat/${group.id}`} 
                    className="block w-full text-center py-2 px-4 bg-green-500 rounded-md text-white font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-ashoka-blue"
                  >
                    Enter Group
                  </Link>
                ) : (
                  <span className="block w-full text-center py-2 px-4 bg-red-300 rounded-md text-dark-gray cursor-not-allowed">
                    Pending Approval
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}