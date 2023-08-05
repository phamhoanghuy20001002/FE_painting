import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useMemo } from 'react';
import { toast } from 'react-toastify';
import { categories } from '../Categorys';
import CategoryInput from '../categoryInput';
import './modal.scss'
import axios from "axios";
import { AddNewProduct } from '../../services/userSevices'
import { Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

interface ModalProps {
    isShowModalAddNew: boolean
    handleClose: () => void;
}
enum STEPS {
    CATEGORY = 0,
    IMAGES = 1,
    INFORMATION = 2,
}
const ModalAddNew: React.FC<ModalProps> = ({
    isShowModalAddNew,
    handleClose,
}) => {
    const navigate = useNavigate();
    const preset_key = "dlvae8gh";
    const cloud_name = "dz4vueeuf";
    const [image, setImage] = useState('');
    const [step, setStep] = useState(STEPS.CATEGORY);
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const handleFile = (event: any) => {
        setIsLoading(true)
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append("upload_preset", preset_key);
        formData.append("cloud_name", cloud_name);

        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
            .then(res => setImage(res.data.secure_url))
            .catch(err => console.log(err))
        setIsLoading(false)
    }

    const onBack = () => {
        setStep((value) => value - 1);
    }

    const onNext = () => {
        setStep((value) => value + 1);
    }
    const SubmitHandler = async () => {
        if (step !== STEPS.INFORMATION) {
            return onNext();
        }
        if (!image || !category || !title || !description || !price) {
            toast.error('Please enter full information');
            return;
        }
        let data = {
            title: title,
            image: image,
            category: category,
            description: description,
            price: price,
            userId: localStorage.getItem('userid')
        }
        let res = await AddNewProduct(data);
        if (res && res.data && res.data.errCode === 0) {
            toast.success('create success')
            setImage('');
            setStep(STEPS.CATEGORY);
            setPrice('');
            setCategory('');
            setDescription('');
            setTitle('')
            handleClose();
            navigate('/your-product')
        }
        else {
            toast.error(res.data.errMessage)
        }

    }
    const actionLabel = useMemo(() => {
        if (step === STEPS.INFORMATION) {
            return 'Create'
        }

        return 'Next'
    }, [step]);
    const handleClinkCategory = (cate: string) => {
        setCategory(cate)
    }
    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined
        }
        return 'Back'
    }, [step]);

    let bodyContent = (
        <div className='body-category'>
            <div className='item'>
                {categories.map((item) => (
                    <div key={item.label} className="item-child">
                        <CategoryInput
                            onClick={() => handleClinkCategory(item.label)}
                            selected={category === item.label}
                            label={item.label}
                            icon={item.icon}

                        />
                    </div>
                ))}
            </div>
        </div>
    )
    if (step === STEPS.IMAGES) {
        bodyContent = (
            <div className="upload">


                <input className='m-auto' type="file" name="image" onChange={handleFile} />
                <img src={image} className="image" />


            </div>
        )
    }
    if (step === STEPS.INFORMATION) {
        bodyContent = (
            <div className='body-info'>
                <div>
                    <form>
                        <div className="form-group">
                            <label>Title</label>
                            <input
                                className="form-control"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label >Description</label>
                            <input
                                className="form-control"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <label >Price</label>
                            <input
                                className="form-control"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)} />
                        </div>
                    </form>
                </div>

            </div>
        )
    }
    return (
        <>


            <Modal
                backdrop='static'
                keyboard={false}
                show={isShowModalAddNew}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {bodyContent}
                </Modal.Body>
                <Modal.Footer>
                    {step !== STEPS.CATEGORY &&
                        <Button variant="secondary" onClick={() => onBack()}>
                            {secondaryActionLabel}
                        </Button>
                    }
                    {isLoading === true ?
                        <Button variant="primary" disabled onClick={() => onBack()}>
                            {actionLabel}
                        </Button>
                        :
                        <Button variant="primary" onClick={() => SubmitHandler()}>
                            {actionLabel}
                        </Button>
                    }


                </Modal.Footer>
            </Modal>
        </>






    )
}
export default ModalAddNew;