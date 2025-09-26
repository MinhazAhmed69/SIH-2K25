// app/page.tsx
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100 text-black">
      <div className="w-full max-w-sm p-8 space-y-6 bg-gray-200 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center text-d-blue">
           Login
        </h2>
        <p className="text-center text-gray-800">
          Access your private communication network
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              User ID
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-d-light-gray border border-transparent rounded-md text-black focus:outline-none focus:ring-2 focus:ring-d-blue"
              placeholder="Enter User ID"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 bg-d-light-gray border border-transparent rounded-md text-black focus:outline-none focus:ring-2 focus:ring-d-blue"
              placeholder="Enter Password"
            />
          </div>
          
          <Link href="/groups">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 rounded-md text-black font-semibold hover:bg-d-navy focus:outline-none focus:ring-2 focus:ring-d-blue"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}