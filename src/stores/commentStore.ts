import { IComment } from "./Interfaces/IComment";
import { create } from "zustand";
import { ICommentRequest } from "../models/request/createComment.model";
import { ICommentResponse } from "../models/response/commentResponse.model";
import axios from "axios";

export const useCommentStore = create<IComment>((set) => ({
   commentRequest: {} as ICommentRequest,
   commentsResponse: [] as ICommentResponse[],  
   getCommentListByIncident: async (id:string)=>{
    set({commentsResponse:[]})
    try {
        await axios.get(`${import.meta.env.VITE_API_URL_BASE}/comments/obtenerPorIncidentes/${id}`).then((data)=>{
          set({commentsResponse:data.data});  
        });
      } catch (error) {
        console.error("Error fetching incidents:", error);
      }
   },
   PostComment: async()=>{
    try{
        await axios.post(`${import.meta.env.VITE_API_URL_BASE}/comments`).then((data)=>{
            console.log("--> ", data);  
            set({ commentsResponse:data.data });
        });
    }catch(error){
        
    }
   }
}));
