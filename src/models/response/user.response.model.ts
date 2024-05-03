import { userType } from "./userType.response.model";

// user Response
export interface IUserResponse {
    lastName: string;
    name: string;
    phone: string;
    userId:number;
    userType: userType;

}