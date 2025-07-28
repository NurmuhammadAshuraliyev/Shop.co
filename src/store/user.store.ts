import { create } from "zustand";

interface IUser {
  username: string;
  image?: string;
  email: string;
}

interface IUserStore {
  data: IUser;
  loggedIn: boolean;
  setUserData: (data: IUser) => void;
}

export const useUserStore = create<IUserStore>((set) => {
  return {
    loggedIn: false,
    data: undefined,
    setUserData: (data: IUser) => set({ data, loggedIn: true }),
  };
});
