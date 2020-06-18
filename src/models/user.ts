import { ICollection } from "../models/common-models";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}
export interface IUserWithKey extends IUser {
  key: string;
}

export interface IUsersCollection extends ICollection<IUser> {}
export interface IUsersCollectionWithKey extends ICollection<IUserWithKey> {}

export interface IUserState {
  collection: IUsersCollection | null;
  loading: boolean;
}
