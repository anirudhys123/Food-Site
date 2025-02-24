import React from 'react';
import './Footer.css';
import logo from '../images/logo.jpeg';
import appStore from '../images/app-store.png';
import playStore from '../images/play-store.png';
import visa from '../images/visa.png';
import masterCard from '../images/master-card.png';
import amex from '../images/amex.jpeg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <img src={logo} alt="Logo" />
                    <p style={{ marginBottom: '20px' }}>Awesome Booking website</p>
                    <p><span className="bi bi-geo-alt-fill"></span> Address: Hyderabad, India</p>
                    <p><span className="bi bi-telephone-fill"></span> Call Us: (+91) - 8179972478</p>
                    <p><span className="bi bi-envelope"></span> Email: <a href="mailto:saianirudh643@gmail.com">saianirudh643@gmail.com</a></p>
                    <p><span className="bi bi-clock"></span> Hours: 10:00 - 18:00, Mon - Sat</p>
                </div>
                {/* <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Delivery Information</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Support Center</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contributors</a></li>
                    </ul>
                </div> */}
                <div className="footer-column">
                    <h3>Popular</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Delivery Information</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    {/* <h3>Install App</h3>
                    <p>From App Store or Google Play</p>
                    <div className="app-logo">
                        <img src={appStore} alt="App Store" />
                        <img src={playStore} alt="Google Play"  />
                    </div> */}
                    <p>Secured Payment Gateways</p>
                    <div>
                        <img src={visa} alt="Visa" width="25%" />
                        <img src={masterCard} alt="Mastercard" width="25%" />
                        <img src={amex} alt="Amex" width="25%" />
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
