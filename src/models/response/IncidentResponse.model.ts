import { IUserResponse } from "./user.response.model";

export interface IincidentReponse{
    subject:string;
    imageUrl:string;
    type:string;
    details:string;
    status:string;
    createAt:string;
    updateAt:string;
    incidentId:string;
    
    user:IUserResponse;
}