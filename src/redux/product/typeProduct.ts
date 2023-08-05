
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export interface AuthenticationProduct {
    id: number;
    description: string;
    imageSrc: string;
    price: number;
    sold: string;
    title: string;
    userId: number
}
interface fetchRequest {
    type: typeof FETCH_REQUEST;

}
interface fetchSuccess {
    type: typeof FETCH_SUCCESS;
    payload: {
        data: AuthenticationProduct
    }
}
interface fetchFailure {
    type: typeof FETCH_FAILURE;
    payload: {
        err: string
    }
}

export interface ProductState {
    data: AuthenticationProduct;

}
export type ProductActionTypes =
    | fetchRequest
    | fetchSuccess
    | fetchFailure
