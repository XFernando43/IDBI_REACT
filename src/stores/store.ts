import { create } from "zustand";
import { IUser } from "../models/newUser.model";
import { Iincident } from "../models/Incidents";
import axios from "axios";
import { Incident } from "./Interfaces/Incident";

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
        // Convertimos la fecha de creación del incidente a un objeto Date
        const incidentDate = new Date(incident.createdAt);
        // Verificamos si la fecha del incidente está dentro del rango especificado
        return incidentDate >= startDate && incidentDate <= endDate;
      });
  
      // Ordenamos los incidentes filtrados por fecha de creación
      const sortedIncidents = filteredIncidents.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateA.getTime() - dateB.getTime();
      });
  
      // Retornamos el estado actualizado con los incidentes ordenados y filtrados
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
  }
  
}));
