import { create } from "zustand";
import axios from "axios";
import { navigate } from 'wouter/use-browser-location';
import { IAuth } from "./Interfaces/IAuth";
import { IcreateNewUserAccountRequest } from "../models/request/createUser.model";

export const useAuthStore = create<IAuth>((set) => ({
  token: "",
  succes: false,
  failed: false,

  // check
  Loggin: async (email: string, password: string) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL_BASE}/account/Loggin`, {email,password,}).then((data)=>{
        set({ succes: true });
        set({ token:data.data.token});
        localStorage.setItem('token',data.data.token);
        localStorage.setItem('TypeUser',data.data.account.user.userType.typeId);
        localStorage.setItem('userId',data.data.account.user.userId);
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
 
  //check

  Register: async (newUser: IcreateNewUserAccountRequest) => {
    try {
      await axios
        .post(`${import.meta.env.VITE_API_URL_BASE}/account`, newUser)
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

  // check
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
