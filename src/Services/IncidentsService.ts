import axios from "axios";
const baseUrl = "http://localhost:3000";

export async function getIncidents(){
    try {
        const response = await axios.get(`${baseUrl}/incident`);
        return response; 
    } catch (error) {
        throw error;
    }
}