import Image from "next/image"



export const Loading = () => {
    return (
        <div className="bg-[#212121] flex flex-col h-screen w-screen items-center justify-center">
                <Image unoptimized src="/puffBlink.gif" alt="loading" width={300} height={300} className="animate-pulse"/>
        </div>
    )
}