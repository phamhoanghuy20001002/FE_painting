import { useCallback } from "react";
import { Image } from "react-bootstrap";
import './historyCard.scss'
import { Link } from "react-router-dom";


interface ProductCardProps {
    data: { imageSrc: string, price: number, title: string, sold: string, userDataProduct: any };
    keyid: string
    onSubmit: (id: string) => void;
};


const ProductCard: React.FC<ProductCardProps> = ({
    data,
    keyid = '',
    onSubmit

}) => {
    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            onSubmit?.(keyid)
        }, [onSubmit, keyid]);
    return (
        <div
            className="container-pro-card"
        >

            <div className="container-product-card">
                <Link to={`/get-detail/${keyid}`} >
                    <Image src={data.imageSrc} alt="" className=" image-product-card" height={'100%'} width={'100%'} />

                </Link>
                {/* //image */}


                <div className="product-title">
                    <div className="font-semibold">
                        {data.title}
                    </div>

                </div>
                <div className="product-price">
                    <div className="font-semibold">
                        {data.price} VND
                    </div>

                </div>
                {data && data.sold === 'sold' &&
                    <div>Đã có người đặt

                        {data.userDataProduct &&
                            <>
                                <div>Tên người mua: {data.userDataProduct.name}</div>
                                <div>SDT: {data.userDataProduct.phoneNumber}</div>
                            </>


                        }
                    </div>
                }

                <div>
                    <button className="button-62" onClick={handleCancel} >Delete</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;