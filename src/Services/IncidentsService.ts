import axios from "axios";
import { Iincident } from "../models/Incidents";
const baseUrl = "http://localhost:3000";

export async function getIncidents(): Promise<Iincident[]> {
    try {
        const response = await axios.get(`${baseUrl}/incident`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
