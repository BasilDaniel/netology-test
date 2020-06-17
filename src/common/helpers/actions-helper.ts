import { Action, AnyAction } from "redux";

export interface IPayloadAction<T, P> extends AnyAction {
  readonly type: T;
  readonly payload: P;
}

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(
  type: T,
  payload: P
): IPayloadAction<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  const res = payload === undefined ? { type } : { type, payload };
  return res;
}

type FunctionType = (...args: any[]) => any;
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType };
export type ActionUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;
