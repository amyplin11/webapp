import { Action } from "redux";

export interface TypedAction<T extends string> extends Action {
  readonly type: T;
}

export interface ActionWithPayload<T extends string, P> extends TypedAction<T> {
  readonly payload: P;
}

export interface ActionWithPayloadAndMeta<T extends string, P, M>
  extends ActionWithPayload<T, P> {
  readonly meta: M;
}
export function createAction<T extends string>(type: T): TypedAction<T>;
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;
export function createAction<T extends string, P, M>(
  type: T,
  payload: P,
  meta: M
): ActionWithPayloadAndMeta<T, P, M>;
export function createAction<T extends string, P, M>(
  type: T,
  payload?: P,
  meta?: M
) {
  if (meta) {
    return { type, payload, meta };
  }
  return payload === undefined ? { type } : { type, payload };
}
