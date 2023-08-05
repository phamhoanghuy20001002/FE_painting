import ProductInfo from "./ProductInfo";
import ProductHead from "./productHead";
import './productClient.scss'
import ProductBuy from "./productBuy";
import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState, useCallback } from "react";
import { getDetailProductById, handleBuyProduct } from '../../services/userSevices'
import { categories } from "../Categorys";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { State } from "../../redux/account/rootReducer";
import { toast } from 'react-toastify';

const ProductClient = () => {
    const navigate = useNavigate();
    const account = useSelector((state: State) => state.user)
    const user = { name: 'huy', phoneNumber: '12345678' }
    const { id } = useParams()
    const [categorys, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const category = useMemo(() => {
        return categories.find((items) =>
            items.label === categorys);
    }, [categorys]);
    let id1: string = id as string
    const [price, setPrice] = useState(0)

    const getDetailProduct = async () => {
        let res = await getDetailProductById(id1)
        setCategory(res.data.data.category)
        setImage(res.data.data.imageSrc)
        setTitle(res.data.data.title)
        setDesc(res.data.data.description)
        setPrice(res.data.data.price)
    }

    useEffect(() => {
        getDetailProduct()
    }, [])
    const onCreateReservation = async () => {
        if (!account.email) {
            navigate('/login')
            return
        }
        let data = await {
            userId: localStorage.getItem('userid'),
            productId: id1,
            totalPrice: price
        }
        console.log('data', price)
        let res = await handleBuyProduct(data)
        if (res && res.data && res.data.errCode === 0) {
            toast.success('create success')
        }
    };
    return (
        <div className="container">
            <div className="container-child1">
                <div className="product-head">
                    <ProductHead
                        title={title}
                        imageSrc={image}
                    />
                </div>
                <div className="product-info">
                    <ProductInfo
                        user={user}
                        description={desc}
                        category={category} />
                    <div className="buy-product">
                        <ProductBuy
                            price={price}
                            onSubmit={onCreateReservation}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductClient;