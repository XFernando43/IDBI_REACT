import { InewUserRequest } from "./createUser.model";

// reuqest
export interface IincidentRequest {
  createAt: string;
  details: string;
  imageUrl: string;
  incidentId: number;
  status: string;
  subject: string;
  type: string;
  updateAt: string;

  user:InewUserRequest;
}
