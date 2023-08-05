import { useEffect, useState, useContext } from 'react';
import './login.scss'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
// import { handleLogoutRedux } from '../redux/actions/userActions'
import { useDispatch, useSelector } from 'react-redux';
import { handleLoginRedux } from '../redux/account/action';
import { State } from '../redux/account/rootReducer';
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [isShowPassword, setIsShowPassword] = useState(false)
    const account = useSelector((state: State) => state.user)
    const isLoading = useSelector((state: State) => state.user.loading)
    console.log('acout', account)
    useEffect(() => {
        if (account && account.email) {
            navigate('/')
        }
    }, [account])

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error('Email/Password is required');
            return;
        }
        dispatch(handleLoginRedux(email, password))
    }

    const handlePressEnter = (event: any) => {
        if (event && event.key === 'Enter') {
            handleLogin()
        }
    }
    return (
        <>
            <div className="login-container col-12 col-sm-4">
                <div className="title">Login</div>
                <input
                    type='text'
                    placeholder='Email or username'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
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
                    onClick={() => handleLogin()}
                    className={email && password ? 'active' : ''} disabled={email && password ? false : true}
                >{isLoading && <i className="fa-solid fa-circle-notch fa-spin"></i>}
                    &nbsp; Login</button>
                <div className='back'><i className='fa-solid fa-angles-left'></i>


                </div>
            </div>
        </>
    )
}
export default Login;