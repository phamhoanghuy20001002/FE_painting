import './productBuy.scss'
interface ProductBuyProps {
    price: number;
    onSubmit: () => void;
}

const ProductBuy: React.FC<
    ProductBuyProps
> = ({
    price,
    onSubmit,

}) => {
        return (
            <div
                className="buy-container"
            >
                <div className="price-buy-product">
                    <div className="price">
                        Price: {price} VND
                    </div>

                </div>

                <hr />
                <div className="p-4">
                    <button className="button-62" onClick={onSubmit} >Buy</button>

                </div>


            </div>
        );
    }

export default ProductBuy;