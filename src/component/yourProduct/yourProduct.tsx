import { useEffect, useState } from 'react';
import { deleteProduct, getAllProductByUserId } from '../../services/userSevices';
import ProductCard from '../order/historyCard'
import '../order/purchasedGoods.scss'
import { toast } from 'react-toastify';

const YourProduct = () => {
    const [products, setProducts] = useState([]);

    let id = localStorage.getItem('userid') as string
    useEffect(() => {
        getAllOrder()
    }, [])
    const getAllOrder = async () => {
        const res = await getAllProductByUserId(id)
        console.log('res', res)
        setProducts(res.data.data)
    }
    const onCreateReservation = async (id: string) => {
        let res = await deleteProduct(id)
        console.log('res', res.data)
        if (res && res.data && res.data.errCode === 0) {
            toast.success('delete success')
            getAllOrder()
        }
        else {
            toast.error('errr')
        }

    };
    return (
        <div>
            <div className='text-head-page'>
                <div className="text-title-head">
                    Tranh bạn đang bán
                </div>

                <div className="subtitle">
                    Uy tín làm nên thương hiệu
                </div>
            </div>
            <div className='propduct-card'>
                {products.map((product: any) => (
                    <ProductCard
                        key={product.id}
                        data={product}
                        keyid={product.id}
                        onSubmit={onCreateReservation}
                    />
                ))}


            </div>
        </div>
    );
}

export default YourProduct;