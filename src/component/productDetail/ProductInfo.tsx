import { IconType } from "react-icons";
import './productInfo.scss';
import Cate from "./cateProduct";
interface ProductInfoProps {
    user: {
        name: string,
        phoneNumber: string
    };
    description: string;
    category: {
        icon: IconType,
        label: string,
        description: string
    } | undefined

}

const ProductInfo: React.FC<ProductInfoProps> = ({
    user,
    description,
    category
}) => {
    return (
        <div className="product-info-container">
            <div className="info-author">
                <div className="text-info-author">
                    <div>Hosted by {user?.name}</div>
                    <div>Phone Number: {user?.phoneNumber}</div>
                </div>
            </div>
            <hr />
            {category && (
                <Cate
                    icon={category.icon}
                    label={category?.label}
                    description={category?.description} />
            )}


            <hr />
            <div className=" product-desc">
                <span className="h4">Description: </span>
                {description}

            </div>
            <hr />

        </div>
    );
}

export default ProductInfo;