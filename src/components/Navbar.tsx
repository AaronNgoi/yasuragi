import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SiteIcon from '../assets/site/heroLogo.png';
import SearchIcon from '../assets/site/searchIcon.svg';
import CartIcon from '../assets/site/cartIcon.svg';

function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 1 ) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    }, [])

    let navbarClasses=['navBar'];
    if (scrolled){
        navbarClasses.push('scrolled');
    }


    return (
        <nav className={navbarClasses.join(" ")}>
            <div className='navWrapper flex flex-row items-center align-center justify-between'>
            <div className='flex flex-row font-bold text-xlg tracking-widest'>
            <div className='my-2 mx-6'>
                <Link to="/all-products">SHOP</Link>
            </div>
            <div className='my-2 mx-6'>
                <Link to="/pages/story">ABOUT</Link>
            </div>
            </div>
            <div>
                <Link to="/">
                    <img src={SiteIcon} alt="Site Icon" />
                </Link>
            </div>
            <div className='flex flex-row px-'>
                <div>
                    <img src={SearchIcon} alt="Search Icon" className='h-6 w-6'/>
                </div>
                <div className='ml-6'>
                    <img src={CartIcon} alt="Cart Icon" className='h-6 w-6 '/>
                </div>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
