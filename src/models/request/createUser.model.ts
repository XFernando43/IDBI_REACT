//crear un nuevo usuario
export interface IcreateNewUserAccountRequest {
    lastName: string;
    name: string;
    phone: string;
    

    typeId: number;
    email: string;
    password: string;
}