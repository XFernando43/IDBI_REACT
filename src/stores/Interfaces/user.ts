import { IUser } from "../../models/newUser.model";

export interface User {

    token:string,
    succes:boolean,
    failed:boolean,

    Loggin:(email:string, password:string)=>Promise<void>;
    Register:(user: IUser)=>Promise<void>;

    verifyLoggin:()=> Boolean;

    hideSucces:()=>void;
    hideFailed:()=>void;
}