import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, ProductState, ProductActionTypes, AuthenticationProduct } from "./typeProduct";

const initialState: ProductState = {
    data: {
        id: 0,
        description: '',
        imageSrc: '',
        price: 0,
        sold: '',
        title: '',
        userId: 0
    },

}
const productReducer = (
    state: ProductState = initialState,
    action: ProductActionTypes
): ProductState => {
    switch (action.type) {
        case FETCH_REQUEST: {
            return { ...state, };
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                data: action.payload.data,
            };
        }
        case FETCH_FAILURE: {
            return {
                ...state,

            };
        }

        default:
            return state;

    }
}
export { productReducer }