import { Dispatch } from "react";
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, ProductState, ProductActionTypes } from "./typeProduct";
import { getAllProduct } from '../../services/userSevices';
import { toast } from "react-toastify";
export const handleGetAllRedux = () => {
    return async (dispatch: Dispatch<ProductActionTypes>) => {
        dispatch({
            type: FETCH_REQUEST,

        });
        // let res = await getAllProduct();
        // if (res && res.data && res.data.errCode === 0) {
        //     console.log('action', res.data)
        //     dispatch({
        //         type: FETCH_SUCCESS,
        //         payload: { data: res.data.data }
        //     });


        // } else {
        //     if (res && res.data.errCode !== 0) {


        //         dispatch({
        //             type: FETCH_FAILURE,
        //             payload: { err: res.data.errMessage }
        //         });
        //     }
        // }
    }
}