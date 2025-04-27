'use client'
import { firebaseAuth } from "@/firebase/init";
import { useUserStore } from "@/store/userStore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useUserStore();
  const onAuthStateChanged = (user: any) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
    setIsLoading(false);
  }
  

  useEffect(() => {
    const subscriber = firebaseAuth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    
  },[])
   if(isLoading){
    return (
      <div className="bg-[#212121] flex flex-col h-screen w-screen items-center justify-center">
        <Image src="/puffBlink.gif" alt="loading" width={300} height={300} className="animate-pulse"/>
        {/* <p className="text-white text-5xl">Loading...</p> */}
        </div>
    )
   }
   if (!user && !isLoading) redirect("/login");

   return (
    <div className="bg-[#212121] flex flex-col h-screen w-screen items-center justify-center">
        <p className="text-white text-5xl">{user.displayName}</p>
        <button onClick={() => firebaseAuth.signOut()}>Logout</button>
      </div>
   )

}
