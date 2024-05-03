import { create } from "zustand";
import { IUser } from "../models/newUser.model";
import { Iincident } from "../models/Incidents";
import axios from "axios";
import { Incident } from "./Interfaces/Incident";
import dayjs from "dayjs";

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
      console.error("Error fetching incidents:", error);
    }
  },
  orderByDate: async (startDate: Date, endDate: Date) => {
    set((state) => {
      if (state.incidents.length === 0) {
        state.fetchIncidents();
      }
      const filteredIncidents = state.incidents.filter((incident) => {
        const incidentDate = dayjs(incident.createAt);
        const startDateParsed = dayjs(startDate);
        const endDateParsed = dayjs(endDate);

        const incidentDay = incidentDate.format("YYYY-MM-DD");
        const startDay = startDateParsed.add(1, "day").format("YYYY-MM-DD");
        const endDay = endDateParsed.add(1, "day").format("YYYY-MM-DD");

        return incidentDay >= startDay && incidentDay <= endDay;
      });
      return { incidents: filteredIncidents };
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
  formatDay: (date: string) => {
    const parsedDate = dayjs(date);
    const formattedDate = parsedDate.format("YYYY-MM-DD HH:mm:ss");
    return formattedDate;
  },
}));
