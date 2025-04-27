'use client'
import { firebaseAuth } from "@/firebase/init";
import { useUserStore } from "@/store/userStore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Loading } from "@/components/loading";

export default function LoginPage() {
    const provider = new GoogleAuthProvider();
    const auth = firebaseAuth;
    const { user, setUser } = useUserStore();
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setIsLoading(false);
            if (user) {
                router.push('/');
            }
        });

        return () => unsubscribe();
    }, []);

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
            // Redirect will be handled by onAuthStateChanged
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };

    if (isLoading) {
        return (
            <Loading />
        );
    }

    if (!user && !isLoading ) return (
        <div className="min-h-screen bg-[#212121] flex items-center justify-center px-4">
            <div className="max-w-md w-full space-y-8 p-8 bg-[#2d2d2d] rounded-xl shadow-lg">
                <div className="text-center flex flex-col items-center justify-center">
                    <h2 className="mt-6 text-3xl font-bold text-white">
                        Welcome to Dorara
                    </h2>
                    <Image
                        src="/puffHello.png"
                        alt="Logo"
                        width={200}
                        height={200}
                    />
                    <p className="mt-2 text-sm text-gray-400">
                        Please sign in to continue
                    </p>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    className="w-full cursor-pointer flex items-center justify-center gap-3 bg-white text-gray-800 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                    <Image
                        src="/google.svg"
                        alt="Google"
                        width={20}
                        height={20}
                    />
                    <span className="font-medium">Continue with Google</span>
                </button>

                <div className="mt-4 text-center text-sm">
                    <p className="text-gray-400">
                        By signing in, you agree to our{" "}
                        <a href="#" className="text-blue-400 hover:underline">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-400 hover:underline">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}