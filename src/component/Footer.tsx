import React from "react"
import './Footer.scss'
import { BiLogoFacebookSquare } from 'react-icons/bi'
import { AiFillInstagram } from 'react-icons/ai'
const Footer = () => {
    return (
        <div className='container-footer'>
            <div className="text">
                @2023 huyPham All rights reserved
            </div>
            <div className='social'>
                <BiLogoFacebookSquare size={'30px'} />
                <AiFillInstagram size={'30px'} />

            </div>

        </div>

    )
}
export default Footer