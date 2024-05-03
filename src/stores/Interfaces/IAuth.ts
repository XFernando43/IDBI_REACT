import { IcreateNewUserAccountRequest } from "../../models/request/createUser.model";

// modelo del store
export interface IAuth {
    token:string,
    succes:boolean,
    failed:boolean,
    Loggin:(email:string, password:string)=>Promise<void>;
    Register:(user: IcreateNewUserAccountRequest)=>Promise<void>;
    verifyLoggin:()=> Boolean;
    hideSucces:()=>void;
    hideFailed:()=>void;
}