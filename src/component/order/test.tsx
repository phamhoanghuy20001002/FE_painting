import { useEffect, useState } from 'react';
import { deleteOrder, getAllOrderByid } from '../../services/userSevices';
import ProductCard from './historyCard'
import './purchasedGoods.scss'
import { toast } from 'react-toastify';

const History = () => {
    const [products, setProducts] = useState([]);
    const [idDel, setidDel] = useState('');

    let id = localStorage.getItem('userid') as string
    useEffect(() => {
        getAllOrder()
    }, [])
    const getAllOrder = async () => {
        const res = await getAllOrderByid(id)
        setProducts(res.data.data)
    }
    const onCreateReservation = async (id: string) => {
        setidDel(id)
        let res = await deleteOrder(id)
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
                    Tranh bạn đã mua
                </div>

                <div className="subtitle">
                    Uy tín làm nên thương hiệu
                </div>
            </div>
            <div className='propduct-card'>
                {products.map((product: any) => (
                    <ProductCard
                        key={product.id}
                        data={product.orderDataProduct}
                        keyid={product.id}
                        onSubmit={onCreateReservation}
                    />
                ))}


            </div>
        </div>
    );
}

export default History;