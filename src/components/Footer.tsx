import React from 'react';
import facebook from '../assets/site/facebook.svg'
import instagram from '../assets/site/instagram.svg'
import tiktok from '../assets/site/tiktok.svg'
import pinterest from '../assets/site/pinterest.svg'
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer: React.FC = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <footer className="footer w-full">
            <div className="footer-section flex flex-col px-6">
                <h2 className="footer-section-header">YASURAGI TEA</h2>
                <div className="">
                    <p className="mb-3">Copyright © Yasuragi Tea</p>
                    <p className="mb-5">© 2023 Stay Happy Tea Company. <br/> All rights reserved<strong>.</strong></p>
                </div>
                <div className="footer-social-media-links flex flex-row">
                    <img src={facebook} alt='Facebook' className='socialIcon'/>
                    <img src={instagram} alt='instagram' className='socialIcon'/>
                    <img src={tiktok} alt='tiktok' className='socialIcon'/>
                    <img src={pinterest} alt='pinterest' className='socialIcon'/>
                </div>
            </div>
            <div className="footer-section  flex flex-col px-5">
                <h2 className="footer-section-header">ABOUT</h2>
                <ul className="footer-section-list">
                    <li className="">
                        <Link to="/pages/shipping-returns" className="section-link">SHIPPING & RETURNS</Link>
                    </li>
                    <li className="">
                        <Link to="/pages/blog" className="section-link">BLOG</Link>
                    </li>
                    <li className="">
                        <Link to="/pages/contact-us" className="section-link">CONTACT US</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-section flex flex-col px-5">
                <h2 className="footer-section-header">POLICIES</h2>
                <ul className="">
                    <li className="">
                        <Link to="/pages/privacy-policy" className="section-link">PRIVACY POLICY</Link>
                    </li>
                    <li className="">
                        <Link to="/pages/terms-conditions" className="section-link">TERMS &amp; CONDITIONS</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-section flex flex-col px-5 mb-10">
                <h2 className="footer-section-header">LOVE TEA?</h2>
                <div className="join-us-info">
                    <p className="join-us-text mb-5">Provide your email to get exclusive updates on our new tea collections, accessories, and much more.</p>
                </div>
                <form id="footer-newsletter" className="newsletter-form">
                    <input type="email" className="inputBox2 px-4 py-2 text-md bg-transparent" aria-label="Enter your email address" placeholder="Enter your email address" required />
                    <button type="submit" className="HeroButtonLight mt-5">SUBSCRIBE</button>
                </form>
            </div>
        </footer>

    );
};

export default Footer;