import { ICollection } from "../models/common-models";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

export interface IUsersCollection extends ICollection<IUser> {}

export interface IUserState {
  collection: IUsersCollection | null;
  loading: boolean;
}
