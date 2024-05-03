import { userType } from "./userType.response.model";

export interface InewUserRequest {
    lastName: string;
    name: string;
    phone: string;
    userId:number;
    userType: userType;
}