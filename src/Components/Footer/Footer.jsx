import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../images/instagram_icon.png'
import pintrest_icon from '../images/pintester_icon.png'
import whatsApp_icon from '../images/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={pintrest_icon} alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={whatsApp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>CopyRight @ 2023 - All Right Reserved</p>
        </div>
    </div>
  )
}
