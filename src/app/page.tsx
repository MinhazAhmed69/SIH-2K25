// app/page.tsx
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#b2b6b1] via-[#e6ece7] to-[#2d4739] text-[#232726] font-sans">
      <div className="w-full max-w-sm p-8 space-y-6 bg-[#e6ece7]/90 rounded-2xl shadow-2xl border border-[#2d4739] backdrop-blur-md">
  <h2 className="text-3xl font-extrabold text-center text-[#2d4739] tracking-tight">Login</h2>
  <p className="text-center text-[#4b5563]">Access your private communication network</p>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#2d4739]">User ID</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 bg-white border border-[#2d4739] rounded-lg text-[#232726] focus:outline-none focus:ring-2 focus:ring-[#2d4739] placeholder:text-[#b2b6b1]/70"
              placeholder="Enter User ID"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2d4739]">Password</label>
            <input
              type="password"
              className="mt-1 block w-full px-4 py-2 bg-white border border-[#2d4739] rounded-lg text-[#232726] focus:outline-none focus:ring-2 focus:ring-[#2d4739] placeholder:text-[#b2b6b1]/70"
              placeholder="Enter Password"
            />
          </div>
          <Link href="/groups">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#2d4739] rounded-lg text-white font-semibold hover:bg-[#b2b6b1] hover:text-[#2d4739] focus:outline-none focus:ring-2 focus:ring-[#2d4739] transition-colors shadow"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}