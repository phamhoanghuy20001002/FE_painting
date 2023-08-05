import './Header.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserMenu from './UserMenu';
import { useState } from 'react';
import ModalAddNew from './modal/modal';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/account/rootReducer';
import logo from '../logo1.png';

function Header() {
    const account = useSelector((state: State) => state.user)

    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)
    const navigate = useNavigate();

    const handleClose = () => {

        setIsShowModalAddNew(false)

    }
    const handleOpen = () => {

        if (account && account.email) {
            setIsShowModalAddNew(true)

        }
        else {
            navigate('/login')

        }

    }
    const NavigatePage = () => {
        if (account && account.email) {
            navigate('/purchased-goods')

        }
        else {
            navigate('/login')

        }
    }
    const NavigatePage2 = () => {
        if (account && account.email) {
            navigate('/your-product')

        }
        else {
            navigate('/login')

        }
    }
    const home = () => {
        navigate('/')

    }
    return (
        <div>

            <div className="menu">
                <div className="logo-wrapper">
                    <div className="container">
                        <div className="logo-container">
                            <div className="logo-content-wrapper">
                                <img
                                    onClick={() => home()}
                                    src={logo}
                                    width='150'
                                    height='150'
                                    className='logo'
                                />
                            </div>
                        </div>


                    </div>
                </div>
                <div className="menu-container">
                    <div className="container-one">
                        <ul className="menu-items">
                            <li className="menu-item">
                                <div className='a'>
                                    <div onClick={() => handleOpen()} className="menu-item-text">
                                        Thêm tranh của bạn
                                    </div>
                                </div>

                            </li>
                            <li className="menu-item">
                                <div className='a'>
                                    <div onClick={() => NavigatePage()} className="menu-item-text">
                                        Lịch sử đặt hàng
                                    </div>
                                </div>
                            </li>
                            <li className="menu-item">
                                <div className='a'>
                                    <div onClick={() => NavigatePage2()} className="menu-item-text">
                                        Tranh của bạn
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className=''>
                    <UserMenu />
                </div>
            </div>
            <ModalAddNew
                isShowModalAddNew={isShowModalAddNew}
                handleClose={handleClose}
            />
        </div>
    );
}

export default Header;
