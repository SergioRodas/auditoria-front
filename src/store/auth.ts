import { create } from "zustand";
import { persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";
import { User } from "../interfaces/User";

export interface Profile {
  _id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

type State = {
  token: string|null;
  profile: User|null;
  isAuth: boolean;
};

type Actions = {
  setProfile: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: null,
      profile: null,
      isAuth: false,
      setProfile: async (token: string) => {
        const decodedToken: User = jwtDecode(token);
        set(() => ({
          token,
          profile: decodedToken,
          isAuth: !!token,
        }));
      },
      logout: () => set(() => ({ token: null, profile: null, isAuth: false })),
    }),
    {
      name: "auth",
    }
  )
);
