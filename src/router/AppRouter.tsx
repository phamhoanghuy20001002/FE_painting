import { Routes, Route } from "react-router-dom";
import BasicSlider from '../component/BasicSlider';
import Categories from '../component/Categorys';
import Body from '../component/body';
import Login from "../component/login";
import Register from "../component/Register";
import UploadFile from "../component/UploadFile";
import ProductClient from "../component/productDetail/productClient";
import NotFound from "./NotFound";
import Text from '../component/order/test';
import YourProduct from "../component/yourProduct/yourProduct";
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={
                <>
                    <BasicSlider />
                    <Categories />
                    <Body />
                </>
            } />
            <Route path='/login' element={
                <>
                    <Login />
                </>
            } />
            <Route path='/register' element={
                <>
                    <Register />
                </>
            } />
            <Route path='/upload' element={
                <>
                    <UploadFile />
                </>
            } />
            <Route path='/get-detail/:id' element={
                <>
                    <ProductClient />
                </>
            } />
            <Route path='/purchased-goods' element={
                <>
                    <Text />
                </>
            } />
            <Route path='/your-product' element={
                <>
                    <YourProduct />
                </>
            } />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default AppRouter;