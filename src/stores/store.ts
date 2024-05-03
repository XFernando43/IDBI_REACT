import { create } from "zustand";
import { IUser } from "../models/newUser.model";
import { Iincident } from "../models/Incidents";
import axios from "axios";
import { Incident } from "./Interfaces/Incident";
import dayjs from 'dayjs';

const baseUrl = "http://localhost:3000";



export const useIncidentStore = create<Incident>((set) => ({
  incidents: [] as Iincident[],
  user: {} as IUser,
  fetchIncidents: async () => {
    try {
      const response = await axios.get(`${baseUrl}/incident`);
      const data = response.data;
      set({ incidents: data });
    } catch (error) {
      console.error('Error fetching incidents:', error);
    }
  },
  orderByDate: (startDate: Date, endDate: Date) => {
    set((state) => {
      const filteredIncidents = state.incidents.filter((incident) => {
        const incidentDate = new Date(incident.createAt);
        console.log(incident);
        return incidentDate >= startDate && incidentDate <= endDate;
      });
      const sortedIncidents = filteredIncidents.sort((a, b) => {
        const dateA = new Date(a.createAt);
        const dateB = new Date(b.createAt);
        return dateA.getTime() - dateB.getTime();
      });
      return { incidents: sortedIncidents };
    });
  },
  orderByState: (status: string) => {
    set((state) => {
      const sortedIncidents = state.incidents.slice().sort((a, b) => {
        if (a.status == status) return -1;
        if (b.status !== status) return 1;
        return 0;
      });
      return { incidents: sortedIncidents };
    });
  },
  formatDay:(date:string)=>{
    const parsedDate = dayjs(date);

    const formattedDate = parsedDate.format('YYYY-MM-DD HH:mm:ss');

    return formattedDate;
  }
  
}));
