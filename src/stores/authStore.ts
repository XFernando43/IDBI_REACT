import { create } from "zustand";
import axios from "axios";
import { User } from "./Interfaces/user";
import { IUser } from "../models/newUser.model";

const baseUrl = "http://localhost:3000";

export const useAuthStore = create<User>((set) => ({
  name: "",
  lastName: "",
  phone: "",
  typeId: 0,
  email: "",
  password: "",
  token: "",
  succes: false,
  failed: false,
  Loggin: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${baseUrl}/Loggin`, {
        email,
        password,
      });
      const data = response.data;
      set({ token: data });
    } catch (error) {
      console.error("Error fetching incidents:", error);
    }
  },
  Register: async (user: IUser) => {
    try {
      await axios
        .post(`${baseUrl}/account`, user)
        .then(() => {
          set({ succes: true });
        })
        .catch((error) => {
          console.error("Error:", error);
          set({ failed: true });
        });
    } catch (error) {
      throw error;
    }
  },
  hideSucces: () => {
    set({ succes: false });
  },
  hideFailed: () => {
    set({ failed: false });
  },
}));
