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
      <div className="bg-[#212121] flex flex-col h-screen w-full items-center justify-center">
        <Image src="/puffBlink.gif" alt="loading" width={300} height={300} className="animate-pulse"/>
      </div>
    )
  }
  
  if (!user && !isLoading) redirect("/login");

  return redirect("/home");
}
