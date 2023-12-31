import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import mobileIcon from '../assets/site/YasuragiMobileLogo.webp';
import desktopIcon from '../assets/site/YausragiDesktopLogo.webp';
import SearchIcon from '../assets/site/searchIcon.svg';
import CartIcon from '../assets/site/cartIcon.svg';
import menuIcon from '../assets/site/menu.svg';
import CloseIcon from '../assets/site/close.svg';
import add from '../assets/site/add.svg';
import minus from '../assets/site/minus.svg';
import products from './AllData';
import ProductPreview from './ProductPreview';
import ShoppingCart from "./ShoppingCart";
import { CartContext, CartContextValue, CartItem } from '../utils/CartContext';




function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [showAboutMegaMenu, setShowAboutMegaMenu] = useState(false);
    const [showShopMegaMenu, setShowShopMegaMenu] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileTeaMenuOpen, setMobileTeaMenuOpen] = useState(false);
    const [mobileAccessoriesMenuOpen, setMobileAccessoriesMenuOpen] = useState(false);
    const [showSearchOpen, setShowSearchOpen] = useState(false);


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

    const cartContext = useContext(CartContext);

    if (!cartContext) {
        return <div>Cart context not available</div>;
    }

    const { toggleShoppingCartOpen, shoppingCartOpen, closeShoppingCartOpen } = cartContext;


    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 40 ) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
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

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const toggleMobileTeaMenu = () => {
        setMobileTeaMenuOpen(!mobileTeaMenuOpen);
    };

    const toggleMobileAccessoriesMenu = () => {
        setMobileAccessoriesMenuOpen(!mobileAccessoriesMenuOpen);
    };

    const toggleShowSearchOpen = () => {
        setShowSearchOpen(!showSearchOpen);
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

            {mobileMenuOpen && (
                <>
                    <div className="mobileNavMenuBackground" onClick={toggleMobileMenu}></div>

                <div className="mobileNavMenuPopOut ">
                    <div className="mobileNavMenuCloseIcon" onClick={toggleMobileMenu}>
                        <img src={CloseIcon} alt="Close Icon" className="h-5 w-5" />
                    </div>
                    <div className="mobile-accordion-menu darkBrownFont">
                        <div className="mobile-accordion-menu-item">
                            <div className="accordion-header " onClick={showShopMegaMenu ? hideMegaMenusHandler : showShopMegaMenuHandler}>
                                <div className="flex justify-between items-center">
                                    <div className=''>SHOP</div>
                                    <div>
                                        <img className="h-4 w-4" src={showShopMegaMenu ? minus : add} alt="Expand" />
                                    </div>
                                </div>
                            </div>
                            {showShopMegaMenu && (
                                <ul className="accordion-content">

                                    <div className="flex justify-between items-center" onClick={toggleMobileTeaMenu}>
                                        <div className='my-2'>TEA</div>
                                        <div>
                                            <img className="h-4 w-4" src={mobileTeaMenuOpen ? minus : add} alt="Expand" />
                                        </div>
                                    </div>

                                    {mobileTeaMenuOpen && teaProducts.map((product) => (
                                        <li className='shopMegaMenuLink' key={product.id}>
                                            <Link to={`/products/${product.id}`} onClick={closeMobileMenu}>{product.title}</Link>
                                        </li>
                                    ))}



                                    <div className="flex justify-between items-center" onClick={toggleMobileAccessoriesMenu}>
                                        <div className='my-2'>ACCESSORIES</div>
                                        <div>
                                            <img className="h-4 w-4" src={mobileAccessoriesMenuOpen ? minus : add} alt="Expand" />
                                        </div>
                                    </div>

                                    {mobileAccessoriesMenuOpen && accessoryProducts.map((product) => (
                                        <li className='shopMegaMenuLink' key={product.id}>
                                            <Link to={`/products/${product.id}`} onClick={closeMobileMenu} >{product.title}</Link>
                                        </li>
                                    ))}

                                    <li className='my-2'><Link to="/all-products" onClick={closeMobileMenu}>VIEW ALL</Link></li>
                                </ul>
                            )}
                        </div>
                        <div className="mobile-accordion-menu-item">
                            <div className="accordion-header " onClick={showAboutMegaMenu ? hideMegaMenusHandler : showAboutMegaMenuHandler }>
                                <div className="flex justify-between items-center">
                                    <div className=''>ABOUT</div>
                                    <div>
                                        <img className="h-4 w-4" src={showAboutMegaMenu ? minus : add} alt="Expand" />
                                    </div>
                                </div>
                            </div>
                            {showAboutMegaMenu && (
                                <div className="accordion-content">
                                    <ul className="flex flex-col ">
                                        <li><Link to="/pages/story" onClick={closeMobileMenu}>STORY</Link></li>
                                        <li><Link to="/pages/packaging" onClick={closeMobileMenu}>PACKAGING</Link></li>
                                        <li><Link to="/pages/planet" onClick={closeMobileMenu}>PLANET</Link></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                </>
            )}
        <nav className={navbarClasses.join(" ")} onMouseLeave={hideMegaMenusHandler}>
            <div className='navWrapper flex flex-row items-center align-center justify-between relative'>
            <div className='flex flex-row text-xlg tracking-widest items-center'>
                <div className='my-2 mx-7 mobile-hidden tablet-hidden'
                     onMouseEnter={showShopMegaMenuHandler}
                     >
                    <div className='navLink font-bold'>
                        <Link to="/all-products">SHOP</Link>
                    </div>

                    <div className={`MegaMenu ${showShopMegaMenu ? 'show' : ''}`}>
                        <div className='megaMenuShop '>

                            <div className="mega-menu-column">
                                <Link to="/tea" className='shopMegaHeader' onClick={hideMegaMenusHandler}>Tea</Link>
                            <ul>
                                {teaProducts.map((product) => (
                                    <li className='shopMegaMenuLink' key={product.id}>
                                        <Link to={`/products/${product.id}`}  onClick={hideMegaMenusHandler}>{product.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                            <div className="mega-menu-column">
                                    <Link to="/accessories" className='shopMegaHeader'  onClick={hideMegaMenusHandler}>Accessories</Link>
                            <ul>
                                {accessoryProducts.map((product) => (
                                    <li className='shopMegaMenuLink' key={product.id}>
                                        <Link to={`/products/${product.id}`}  onClick={hideMegaMenusHandler}>{product.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                            <div className="mega-menu-column">
                                <Link to="/all-products" className='shopMegaHeader'  onClick={hideMegaMenusHandler}>View All</Link>
                            </div>

                            <div className="mega-menu-column"  onClick={hideMegaMenusHandler}>
                                {products
                                    .filter((product) => product.id === 1)
                                    .map((product) => (
                                        <ProductPreview key={product.id} product={product} />
                                    ))}
                            </div>

                            <div className="mega-menu-column"  onClick={hideMegaMenusHandler}>
                                {products
                                    .filter((product) => product.id === 3)
                                    .map((product) => (
                                        <ProductPreview key={product.id} product={product} />
                                    ))}
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
                <div className={`MegaMenu ${showAboutMegaMenu ? 'show' : ''}`}>
                    <ul className="flex flex-row justify-around">
                        <li>
                            <Link to="/pages/story"  onClick={hideMegaMenusHandler}>STORY</Link>
                        </li>
                        <li>
                            <Link to="/pages/packaging"  onClick={hideMegaMenusHandler}>PACKAGING</Link>
                        </li>
                        <li>
                            <Link to="/pages/planet"  onClick={hideMegaMenusHandler}>PLANET</Link>
                        </li>
                    </ul>
                </div>
            </div>
                <div className='desktop-hidden'  onClick={toggleMobileMenu}>
                    <img src={menuIcon} alt="Menu Icon" className='h-6 w-6'/>
                    {/* Mobile Accordion Menu */}
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
                    <img src={SearchIcon} alt="Search Icon" className='h-6 w-6' onClick={toggleShowSearchOpen}/>


                    <div className={`MegaMenu ${showSearchOpen ? 'show' : ''}`}>
                        <ul className="flex flex-row justify-between z-10">
                            <div className='flex flex-row px-4 md:pl-8 lg:py-2 lg:pl-12'>
                                <img src={SearchIcon} alt="Search Icon" className='h-6 w-6 mr-4' onClick={toggleShowSearchOpen}/>
                                <input type="text" placeholder="SEARCH..." className="search-input"/>
                            </div>
                            <div className="px-4 lg:py-2 md:pr-8 lg:pr-12 flex items-center justify-center" onClick={toggleShowSearchOpen}>
                                <img src={CloseIcon} alt="Close Icon" className="h-4 w-4" />
                            </div>
                        </ul>
                    </div>

                    {showSearchOpen &&
                        <div className="searchCloseBackground" onClick={toggleShowSearchOpen}></div>
                    }

                </div>
                <div className='ml-6'>
                    <img src={CartIcon} alt="Cart Icon" className='h-6 w-6 ' onClick={toggleShoppingCartOpen}/>

                    { shoppingCartOpen &&
                        <ShoppingCart/>
                    }
                </div>
            </div>
            </div>

        </nav>
        </div>
    );
}

export default Navbar;
