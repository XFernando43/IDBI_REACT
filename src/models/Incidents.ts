import { IUser } from "./newUser.model";

export interface Iincident {
  createAt: string;
  details: string;
  imageUrl: string;
  incidentId: number;
  status: string;
  subject: string;
  type: string;
  updateAt: string;

  user:IUser;
}
