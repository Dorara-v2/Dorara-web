'use client'
import { firebaseAuth } from "@/firebase/init";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdHome } from "react-icons/md";

export default function Sidebar() {
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    return pathname === path ? "bg-[#3d3d3d]" : "";
  };

  return (
    <div className="h-screen w-64 bg-[#2d2d2d] fixed left-0 top-0 p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <Image src="/icon.png" alt="Logo" width={80} height={80} />
        <h1 className="text-white text-xl font-bold">Dorara</h1>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link 
              href="/home" 
              className={`text-gray-300 hover:text-white flex items-center gap-2 p-2 rounded hover:bg-[#3d3d3d] ${isActivePath('/home')}`}
            >
              🏠 Home
            </Link>
          </li>
          <li>
            <Link 
              href="/todo"
              className={`text-gray-300 hover:text-white flex items-center gap-2 p-2 rounded hover:bg-[#3d3d3d] ${isActivePath('/todo')}`}
            >
              📋 Todo
            </Link>
          </li>
          <li>
            <Link 
              href="/notes"
              className={`text-gray-300 hover:text-white flex items-center gap-2 p-2 rounded hover:bg-[#3d3d3d] ${isActivePath('/notes')}`}
            >
              📊 Notes
            </Link>
          </li>
          <li>
            <Link 
              href="/routines"
              className={`text-gray-300 hover:text-white flex items-center gap-2 p-2 rounded hover:bg-[#3d3d3d] ${isActivePath('/routines')}`}
            >
              📊 Routines
            </Link>
          </li>
          <li>
            <Link 
              href="/bookmarks"
              className={`text-gray-300 hover:text-white flex items-center gap-2 p-2 rounded hover:bg-[#3d3d3d] ${isActivePath('/bookmarks')}`}
            >
              📊 Bookmarks
            </Link>
          </li>
          <li>
            <Link 
              href="/expense"
              className={`text-gray-300 hover:text-white text-lg flex items-center gap-2 p-2 rounded hover:bg-[#3d3d3d] gap-x-2 ${isActivePath('/expense')}`}
            >
              <MdHome size={24} />
              <p>Expense</p>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="border-t border-[#4d4d4d] pt-4">
        <button 
          onClick={() => firebaseAuth.signOut()}
          className="w-full text-gray-300 hover:text-white flex items-center gap-2 p-2 rounded hover:bg-[#3d3d3d]"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}
