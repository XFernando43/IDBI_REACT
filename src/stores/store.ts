import { create } from "zustand";
import { IUser } from "../models/newUser.model";
import { Iincident } from "../models/Incidents";
import axios from "axios";

const baseUrl = "http://localhost:3000";


interface Incident {
  incidents: Iincident[];
  user: IUser;

  fetchIncidents:() => Promise<void>;
}


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
}));
