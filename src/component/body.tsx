import { useEffect, useState } from 'react';
import { getAllProduct } from '../services/userSevices';
import ProductCard from './ProductCard'
import './body.scss';
import { useSearchParams } from 'react-router-dom';
import EmptyState from './EmptyState';

const Body = () => {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()
    const category = searchParams.get('category') as string;

    useEffect(() => {
        getAll()
    }, [searchParams])
    const getAll = async () => {
        const res = await getAllProduct(category)
        console.log('res', res)
        setProducts(res.data.data)

    }
    if (products.length === 0) {
        return (

            <EmptyState />

        );
    }
    // const getAllProductByUser = async()=>{
    //     const res
    // }

    return (
        <div>
            <div className='container-get-all'>
                <div className="container-content">
                    <h1> Product</h1>
                </div>
            </div>
            <div className='propduct-card'>
                {products.map((product: any) => (
                    <ProductCard
                        key={product.id}
                        data={product}
                        keyid={product.id}
                    />
                ))}


            </div>
        </div>
    );
}

export default Body;