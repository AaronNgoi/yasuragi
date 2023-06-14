import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mobileIcon from '../assets/site/YasuragiMobileLogo.webp';
import desktopIcon from '../assets/site/YausragiDesktopLogo.webp';
import SearchIcon from '../assets/site/searchIcon.svg';
import CartIcon from '../assets/site/cartIcon.svg';
import menuIcon from '../assets/site/menu.svg';
import products from './AllData';
import ProductItem from './ProductItem';


function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [showAboutMegaMenu, setShowAboutMegaMenu] = useState(false);
    const [showShopMegaMenu, setShowShopMegaMenu] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 40 ) {
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
    if (!scrolled) {
        navbarClasses.push('navBarWithAnnouncement');
    }

    const showAboutMegaMenuHandler = () => {
        setShowAboutMegaMenu(true);
        setShowShopMegaMenu(false);
    };

    const showShopMegaMenuHandler = () => {
        setShowShopMegaMenu(true);
        setShowAboutMegaMenu(false);
    };

    const hideMegaMenusHandler = () => {
        setShowAboutMegaMenu(false);
        setShowShopMegaMenu(false);
    };


    const teaProducts = products.filter((product) => product.type === 'tea');
    const accessoryProducts = products.filter((product) => product.type === 'accessory');

    return (
        <div>
            { !scrolled &&
                    <div className="AnnouncementBar px-6 py-3 ">
                        <div className="AnnouncementBar-Wrapper text-center">
                            <p className="AnnouncementBar-Content font-bold text-sm tracking-widest whitespace-nowrap overflow-ellipsis">
                                FREE SHIPPING OVER <span className='loraBold'> $150 </span>
                            </p>
                        </div>
                    </div>
            }
        <nav className={navbarClasses.join(" ")} onMouseLeave={hideMegaMenusHandler}>
            <div className='navWrapper flex flex-row items-center align-center justify-between relative'>
            <div className='flex flex-row text-xlg tracking-widest items-center'>
                <div className='my-2 mx-7 mobile-hidden tablet-hidden'
                     onMouseEnter={showShopMegaMenuHandler}
                     >
                    <div className='navLink font-bold'>
                        <Link to="/all-products">SHOP</Link>
                    </div>

                    <div className={`MegaMenu show ${showShopMegaMenu ? 'show' : ''}`}>
                        <div className='megaMenuShop'>

                            <div className="mega-menu-column">
                                <h3 className='shopMegaHeader text-lg'>Tea</h3>
                            <ul>
                                {teaProducts.map((product) => (
                                    <li className='shopMegaMenuLink' key={product.id}>
                                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                            <div className="mega-menu-column">
                            <h3 className='shopMegaHeader '>Accessories</h3>
                            <ul>
                                {accessoryProducts.map((product) => (
                                    <li key={product.id}>
                                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                            <div className="mega-menu-column">
                                <Link to="/all-products">View All</Link>
                            </div>

                            <div className="mega-menu-column">
                                {/* Product showcase 1 */}
                            </div>

                            <div className="mega-menu-column">
                                {/* Product showcase 2 */}
                            </div>


                        </div>
                    </div>
                </div>
            <div className='my-2 mx-7 mobile-hidden tablet-hidden'
                 onMouseEnter={showAboutMegaMenuHandler}
                 >
                <div className='navLink font-bold'>
                    <Link to="/pages/story">ABOUT</Link>
                </div>
                <div className={`MegaMenu  ${showAboutMegaMenu ? 'show' : ''}`}>
                    <ul className="flex flex-row justify-around">
                        <li>
                            <Link to="/pages/story">STORY</Link>
                        </li>
                        <li>
                            <Link to="/pages/packaging">PACKAGING</Link>
                        </li>
                        <li>
                            <Link to="/pages/planet">PLANET</Link>
                        </li>
                    </ul>
                </div>
            </div>
                <div className='desktop-hidden '>
                    <img src={menuIcon} alt="Menu Icon" className='h-6 w-6'/>
                </div>
            </div>
                <div className="flex ">
                    <div className=''>
                <Link to="/">
                    <img src={desktopIcon} alt="desktop Icon " className='mobile-hidden tablet-hidden desktopIcon' />
                    <img src={mobileIcon} alt="mobile Icon " className='desktop-hidden mobileIcon' />
                </Link>
                    </div>
            </div>
            <div className='flex flex-row '>
                <div>
                    <img src={SearchIcon} alt="Search Icon" className='h-6 w-6'/>
                </div>
                <div className='ml-6'>
                    <img src={CartIcon} alt="Cart Icon" className='h-6 w-6 '/>
                </div>
            </div>
            </div>

        </nav>
        </div>
    );
}

export default Navbar;
