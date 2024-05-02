import axios from "axios";
import { IUser } from "../models/newUser.model";
const baseUrl = "http://localhost:3000/account";

export async function login(email: string, password: string){
    try {
        const response = await axios.post(`${baseUrl}/Loggin`, { email, password });
        return response; 
    } catch (error) {
        throw error;
    }
}


export async function registerNewUser(newUser: IUser){
    try {
        const response = await axios.post(`${baseUrl}`,newUser);
        return response; 
    } catch (error) {
        throw error;
    }
}