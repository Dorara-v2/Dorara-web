'use client'
import { Loading } from "@/components/loading";
import { useUser } from "@/context/userContext";

export default function HomePage() {
  const { user, loading } = useUser();
  console.log(user);
  if(loading) return <Loading />
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-3xl font-bold mb-6">
          Welcome, {user?.displayName}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {['Total Tasks', 'In Progress', 'Completed'].map((title) => (
            <div key={title} className="bg-[#2d2d2d] p-6 rounded-lg">
              <h3 className="text-gray-400 mb-2">{title}</h3>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
          ))}
        </div>

        <div className="bg-[#2d2d2d] rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <p className="text-gray-300">No recent activity</p>
          </div>
        </div>
      </div>
    </div>
  );
}