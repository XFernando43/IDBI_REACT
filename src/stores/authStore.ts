import { create } from "zustand";
import axios from "axios";
import { User } from "./Interfaces/user";
import { IUser } from "../models/newUser.model";
import { navigate } from 'wouter/use-browser-location';

export const useAuthStore = create<User>((set) => ({
  token: "",
  succes: false,
  failed: false,
  Loggin: async (email: string, password: string) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL_BASE}/account/Loggin`, {email,password,}).then((data)=>{
        set({ succes: true });
        set({ token:data.data.token});
        localStorage.setItem('token',data.data.token);
        localStorage.setItem('TypeUser',data.data.account.user.userType.typeId);
        
        if(data.data.account.user.userType.typeId == 1){
          navigate('/createIncident');
        }else{
          navigate('/home');
        }

      }).catch(()=>{
        set({ failed: true });
      });
    } catch (error) {
      console.error("Error fetching incidents:", error);
    }
  },
  Register: async (user: IUser) => {
    try {
      await axios
        .post(`${import.meta.env.VITE_API_URL_BASE}/account`, user)
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

  verifyLoggin: ()=>{
    if(localStorage.getItem('token') == null ){
      navigate('/login');
      return false;  
    }else{
      return true;
    }
  },
  hideSucces: () => {
    set({ succes: false });
  },
  hideFailed: () => {
    set({ failed: false });
  },
}));
