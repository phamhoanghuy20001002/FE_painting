import { useEffect, useState, useContext } from 'react';
import './login.scss'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

import { RegisterUser } from '../services/userSevices'
// import { handleLoginRedux } from '../redux/actions/userActions'

const Register = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')

    const [isShowPassword, setIsShowPassword] = useState(false)
    const handleRegister = async () => {
        if (!email || !password || !phoneNumber || !name) {
            toast.error('Email/Password/phoneNumber is required');
            return;
        }
        let data = {
            name: name,
            phoneNumber: phoneNumber,
            password: password,
            email: email,

        }
        let res = await RegisterUser(data);
        if (res && res.data && res.data.errCode === 0) {
            toast.success('register success')
            navigate('/');
        }
        else {
            toast.error(res.data.errMessage)
        }
        console.log('chkeck:', res.data.errMessage)
        // navigate('/');
    }


    const handleGoBack = () => {
        // navigate('/');
    }
    const handlePressEnter = (event: any) => {
        if (event && event.key === 'Enter') {
            console.log('afaf')
        }
    }
    return (
        <>
            <div className="login-container col-12 col-sm-4">
                <div className="title">Register</div>
                <input
                    type='text'
                    placeholder='Email or username'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type='text'
                    placeholder='phoneNunber'
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                />
                <input
                    type='text'
                    placeholder='name'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <div className='input-password'>
                    <input
                        type={isShowPassword === true ? 'text' : 'password'}
                        placeholder='Password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        onKeyDown={(event) => handlePressEnter(event)}
                    />
                    <i className={isShowPassword === true ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
                        onClick={() => setIsShowPassword(!isShowPassword)}
                    ></i>
                </div>

                <button
                    onClick={() => handleRegister()}
                    className={email && password && phoneNumber && name ? 'active' : ''} disabled={email && password && phoneNumber && name ? false : true}>
                    &nbsp; Register</button>
                <div className='back'><i className='fa-solid fa-angles-left'></i>


                </div>
            </div>
        </>
    )
}
export default Register;