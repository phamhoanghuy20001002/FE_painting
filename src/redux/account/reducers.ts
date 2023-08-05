import { AccountActionTypes, AccountState, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "./type";

const initialState: AccountState = {
    user: null,
    loading: false,
    error: null,
    email: null,

}
const accountReducer = (
    state: AccountState = initialState,
    action: AccountActionTypes
): AccountState => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return { ...state, loading: true };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                email: action.payload.email
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                loading: false,
                email: null,
                error: action.payload.err
            };
        }
        case LOG_OUT: {
            localStorage.removeItem('email');
            localStorage.removeItem('userid');

            return {
                ...state,
                email: null,
                user: null,
                error: null
            };
        }
        default:
            return state;

    }
}
export { accountReducer }