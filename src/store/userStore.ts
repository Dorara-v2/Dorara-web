import { User } from "firebase/auth";
import { create } from "zustand";



interface UserStore {
    user: any;
    setUser: (user: any) => void;

}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user: any) => set({ user }),
}));