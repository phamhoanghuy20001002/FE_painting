
// import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Image } from "react-bootstrap";
import './ProductCard.scss'
import { Link } from "react-router-dom";
// import HeartButton from "../HeartButton";
// import Button from "../Button";

interface ProductCardProps {
    data: { category: string, description: string, imageSrc: string, price: number, title: string, sold: string };
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: string | null;
    keyid: string
};

const ProductCard: React.FC<ProductCardProps> = ({
    data,
    onAction,
    disabled,
    actionLabel,
    actionId = '',
    currentUser,
    keyid,

}) => {
    //   const router = useRouter();




    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();

            if (disabled) {
                return;
            }

            onAction?.(actionId)
        }, [disabled, onAction, actionId]);

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



            </div>
        </div>
    );
}

export default ProductCard;