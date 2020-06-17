import {
  createAction,
  IPayloadAction
} from "../../common/helpers/actions-helper";
import { IUsersCollection } from "../../models/user";

export const GET_USERS_COLLECTION = "GET_USERS_COLLECTION";
export const GET_USERS_COLLECTION_SUCCESS = "GET_USERS_COLLECTION_SUCCESS";
export const UserActions = {
  getUsers: () => createAction(GET_USERS_COLLECTION),
  getUsersSuccess: (model: IUsersCollection) =>
    createAction(GET_USERS_COLLECTION_SUCCESS, model)
};
export type GetUsersAction = IPayloadAction<string, IUsersCollection>;
