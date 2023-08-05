import { Dispatch } from "react";
import { AccountActionTypes, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "./type";
import { LoginUser } from '../../services/userSevices';
import { toast } from "react-toastify";
export const handleLoginRedux = (email: string, password: string) => {
    return async (dispatch: Dispatch<AccountActionTypes>) => {
        dispatch({
            type: LOGIN_REQUEST,
            payload: {
                email: email,
                password: password
            }
        });
        let res = await LoginUser(email.trim(), password);
        if (res && res.data && res.data.errCode === 0) {
            localStorage.setItem('email', email.trim())
            localStorage.setItem('userid', res.data.user.id)

            console.log('dadas', res.data.user.id)
            toast.success('login success');

            dispatch({
                type: LOGIN_SUCCESS,
                payload: { email: email.trim() }
            });


        } else {
            if (res && res.data.errCode !== 0) {
                toast.error('login fail');
                console.log('fali', res.data)

            }
            dispatch({
                type: LOGIN_FAILURE,
                payload: { err: res.data.errMessage }
            });
        }
    }
}
export const LogoutRedux = () => {
    return (dispatch: Dispatch<AccountActionTypes>) => {
        dispatch({
            type: LOG_OUT,

        });
    }
}