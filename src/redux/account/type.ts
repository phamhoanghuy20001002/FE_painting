import { type } from "os";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOG_OUT = 'LOG_OUT';

export interface AuthenticationUser {
    id: number;
    name: string;
    email: string;
    password: string;
}
interface loginRequest {
    type: typeof LOGIN_REQUEST;
    payload: {
        email: string;
        password: string;
    }
}
interface loginSuccess {
    type: typeof LOGIN_SUCCESS;
    payload: {
        email: string;
    }
}
interface loginFailure {
    type: typeof LOGIN_FAILURE;
    payload: {
        err: string
    }
}
interface Logout {
    type: typeof LOG_OUT;
}
export interface AccountState {
    user: AuthenticationUser | null;
    loading: boolean;
    error: string | null;
    email: string | null;
}
export type AccountActionTypes =
    | loginRequest
    | loginSuccess
    | loginFailure
    | Logout;