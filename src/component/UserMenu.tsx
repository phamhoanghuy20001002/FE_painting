
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import './UserMenu.scss'

import MenuItem from "./MenuItem";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/account/rootReducer';
import { toast } from "react-toastify";
import { LogoutRedux } from '../redux/account/action';
import ModalAddNew from './modal/modal';


const UserMenu = () => {
    const account = useSelector((state: State) => state.user)
    const dispatch = useDispatch()

    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
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
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);
    const LogOut = async () => {
        toast.success('Log out success')
        dispatch(LogoutRedux())
    }
    const BackHome = () => {
        navigate('/')
    }
    const Login = () => {
        navigate('/login')
    }
    const Register = () => {
        navigate('/register')
    }
    const History = () => {
        navigate('/purchased-goods')
    }
    const YourPro = () => {
        navigate('/your-product')
    }
    return (
        <div className="menu-user">
            <div className="">

                <div onClick={toggleOpen} className="icon-menu-user">
                    <AiOutlineMenu />
                    <div className="">

                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="open-menu"
                >
                    <div className="items-user-menu">
                        {account.email ? (
                            <>
                                <MenuItem

                                    label="Home"
                                    onClick={() => BackHome()}
                                />
                                <MenuItem
                                    label="Thêm tranh của bạn"
                                    onClick={() => handleOpen()}
                                />
                                <MenuItem
                                    label="Lịch sử đặt hàng"
                                    onClick={() => History()}
                                />
                                <MenuItem
                                    label="Tranh của bạn"
                                    onClick={() => YourPro()}
                                />

                                <hr />
                                <MenuItem
                                    label="Logout"
                                    onClick={() => LogOut()}
                                />
                            </>
                        ) : (
                            <>
                                <MenuItem
                                    label="Login"
                                    onClick={() => Login()}
                                />
                                <MenuItem
                                    label="Sign up"
                                    onClick={() => Register()}
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
            <ModalAddNew
                isShowModalAddNew={isShowModalAddNew}
                handleClose={handleClose}
            />
        </div>
    );
}

export default UserMenu;