import { create } from "zustand";
import axios from "axios";
import { Incident } from "./Interfaces/Incident";
import dayjs from "dayjs";
import { IUserResponse } from "../models/response/user.response.model";
import { IincidentReponse } from "../models/response/IncidentResponse.model";

const token = localStorage.getItem('token');
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};


export const useIncidentStore = create<Incident>((set) => ({
  
  incidentsResponse: [] as IincidentReponse[],
  userResponse: {} as IUserResponse,
  incident: {} as IincidentReponse,

  success:false,
  failed:false,

  fetchIncidents: async () => {
    try {
      set({incidentsResponse:[]});
      await axios.get(`${import.meta.env.VITE_API_URL_BASE}/incident`,config).then((data)=>{
        set({ incidentsResponse: data.data });
      });
    } catch (error) {
      console.error("Error fetching incidents:", error);
    }
  },

  fetchIncidentById:async(incidentId:string)=>{
    try {
      
      const response = await axios.get(`${import.meta.env.VITE_API_URL_BASE}/incident/getIncident/${incidentId}`, config);
      const data = response.data;
      set({ incident: data });
    } catch (error) {
      console.error("Error fetching incidents:", error);
    }
  },

  fetchIncidentsByUserId: async ()=>{
    try {
      set({incidentsResponse:[]});
      const userId = localStorage.getItem('userId');
      await axios.get(`${import.meta.env.VITE_API_URL_BASE}/incident/GetIncidentsByuserId/${userId}`,config).then((response)=>{
        console.log("--> users ",response.data);
        const data = response.data;
        set({incidentsResponse:data});
      }).catch(()=>{
        
      })
    } catch (error) {
      console.error("Error fetching incidents:", error);
    }
  },

  orderByDate: async (startDate: Date, endDate: Date) => {
    set((state) => {


      const typeUser = localStorage.getItem('TypeUser');
      if(typeUser){
        if (parseInt(typeUser) === 2 && state.incidentsResponse.length === 0) {
          state.fetchIncidents();
        }
        if(parseInt(typeUser) === 1 && state.incidentsResponse.length === 0){
          state.fetchIncidentsByUserId();
        }
      }


      const filteredIncidents = state.incidentsResponse.filter((incident) => {
        const incidentDate = dayjs(incident.createAt);
        const startDateParsed = dayjs(startDate);
        const endDateParsed = dayjs(endDate);

        const incidentDay = incidentDate.format("YYYY-MM-DD");
        const startDay = startDateParsed.add(1, "day").format("YYYY-MM-DD");
        const endDay = endDateParsed.add(1, "day").format("YYYY-MM-DD");

        return incidentDay >= startDay && incidentDay <= endDay;
      });
      return { incidentsResponse: filteredIncidents };
    });
  },

  orderByState: (status: string) => {
    set((state) => {
      const sortedIncidents = state.incidentsResponse.slice().sort((a, b) => {
        if (a.status == status) return -1;
        if (b.status !== status) return 1;
        return 0;
      });
      return { incidentsResponse: sortedIncidents };
    });
  },

  formatDay: (date: string) => {
    const parsedDate = dayjs(date);
    const formattedDate = parsedDate.format("YYYY-MM-DD HH:mm:ss");
    return formattedDate;
  },

  submitIncident: async(userId:string,subject:string,type:string,details:string,image:File) => {
    try {
      const formData = new FormData();
      formData.append('userId', userId);
      formData.append('subject', subject);
      formData.append('type', type);
      formData.append('details', details);
      formData.append('status', 'OPEN');
      formData.append('imageUrl', image, image.name);
  
      await axios.post(`${import.meta.env.VITE_API_URL_BASE}/incident`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      }).then(()=>{
        window.alert("submited")
      });
  
      
    } catch (error) {
      console.error("Error al subir incidente:", error);
    }
  }


}));
