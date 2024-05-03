import { IComment } from "./Interfaces/IComment";
import { create } from "zustand";
import { ICommentRequest } from "../models/request/createComment.model";
import { ICommentResponse } from "../models/response/commentResponse.model";
import axios from "axios";

export const useCommentStore = create<IComment>((set) => ({
  commentRequest: {} as ICommentRequest,
  commentsResponse: [] as ICommentResponse[],

  getCommentListByIncident: async (id: string) => {
    set({ commentsResponse: [] });
    try {

      const token = localStorage.getItem('token');
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios
        .get(
          `${
            import.meta.env.VITE_API_URL_BASE
          }/comments/obtenerPorIncidentes/${id}`,config
        
        )
        .then((data) => {
          set({ commentsResponse: data.data });
        });
    } catch (error) {
      console.error("Error fetching incidents:", error);
    }
  },

  PostComment: async (text: string, incidentID:number, userId:number) => {
    

    try {
      const newComment: ICommentRequest = {
        userId: userId,
        incidentID: incidentID,
        content: text,
      };
      await axios.post(
        `${import.meta.env.VITE_API_URL_BASE}/comments`,
        newComment
      );
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL_BASE}/comments/obtenerPorIncidentes/${
          newComment.incidentID
        }`
      );
      set((state) => ({ ...state, commentsResponse: data }));
    } catch (error) {
      console.error("Error posting comment:", error);
    }




  },
}));
