import { IUserResponse } from "./user.response.model";

export interface ICommentResponse{
    incidentID: number,
    userId: number,
    content: string,
    user:IUserResponse;
}