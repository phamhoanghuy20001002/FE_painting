import './productHead.scss'
import { Image } from 'react-bootstrap';
interface ProductHeadProps {
    title: string;
    imageSrc: string;

}
const ProductHead: React.FC<ProductHeadProps> = ({
    title,
    imageSrc
}) => {
    return (
        <>
            <div className='head-title'>
                <div className="title-text ">
                    {title}
                </div>


            </div>
            <div className='image-container'>
                <Image className='image-head' src={imageSrc} alt='image' />
            </div>
        </>
    )
}
export default ProductHead;