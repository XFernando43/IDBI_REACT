import { IUser } from "../../models/newUser.model";

export interface User {
    name: string;
    lastName: string;
    phone: string;
    typeId: number;
    email: string;
    password: string;
    token:string,

    succes:boolean,
    failed:boolean,

    Loggin:(email:string, password:string)=>Promise<void>;
    Register:(user: IUser)=>Promise<void>;
    hideSucces:()=>void;
    hideFailed:()=>void;
}