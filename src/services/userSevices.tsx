import axios from './customize-axios'

interface ITutorialData {
    errMessage: string,
    errCode: number,
    user: {
        id: string,
        email: string,
        phoneNumber: string
    }
}


const RegisterUser = (data: any) => {
    return axios.post<ITutorialData>(`/api/user`, data)
}
const LoginUser = (email: string, password: string) => {
    return axios.post<ITutorialData>(`/api/user-login`, { email, password })
}
const AddNewProduct = (data: any) => {
    return axios.post<ITutorialData>(`/api/add-product`, data)
}
const getAllProduct = (id: string) => {
    return axios.get(`/api/get-all-product?id=${id}`)
}
const getDetailProductById = (id: string) => {
    return axios.get(`/api/get-detail-product-by-id?id=${id}`)
}
const getAllOrderByid = (id: string) => {
    return axios.get(`/api/get-all-order-by-id?id=${id}`)
}

const handleBuyProduct = (data: any) => {
    return axios.post(`/api/buy-product`, data)
}
const deleteOrder = (id: string) => {
    return axios.delete(`/api/delete-order-by-id?id=${id}`)
}
const getAllProductByUserId = (id: string) => {
    return axios.get(`/api/get-all-product-by-userid?id=${id}`)
}
const deleteProduct = (id: string) => {
    return axios.delete(`/api/delete-product-by-id?id=${id}`)
}
export {
    RegisterUser, LoginUser, AddNewProduct, getAllProduct, getDetailProductById, handleBuyProduct,
    getAllOrderByid, deleteOrder, getAllProductByUserId, deleteProduct
};