import { ICommentRequest } from "../../models/request/createComment.model";
import { ICommentResponse } from "../../models/response/commentResponse.model";

export interface IComment {
    commentRequest: ICommentRequest;
    commentsResponse: ICommentResponse[];
    
    
    getCommentListByIncident: (id:string)=> Promise<void>;
    PostComment: (text:string, incidentID:number, userId:number)=> Promise<void>;
}