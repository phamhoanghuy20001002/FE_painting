import React from "react"
import './productCategory.scss'
import { IconType } from "react-icons";

import { BiLogoFacebookSquare } from 'react-icons/bi'
import { AiFillInstagram } from 'react-icons/ai'
interface productCategoryProps {
    icon: IconType;
    label: string;
    description: string;
}
const productCate: React.FC<productCategoryProps> = ({
    icon: Icon,
    label,
    description
}) => {
    return (
        <div className="product-cate-container ">
            <div className="product-cate-child ">
                <Icon size={40} className="product-cate-icon " />
                <div className="info-cate ">
                    <div
                        className="label-cate "
                    >
                        {label}
                    </div>
                    <div
                        className="desc-cate "
                    >
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default productCate