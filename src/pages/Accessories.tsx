import React from 'react';
import { Link } from 'react-router-dom';
import products, { Product } from '../components/AllData';
import ProductItem from "../components/ProductItem";
import Footer from "../components/Footer";

const Accessories = () => {
    return (
        <>
        <div className='navPadding'>
            <div className= 'pageHeader border-b border-t'>
                <h2 className="text-2xl uppercase items-center font-bold text-center tracking-widest darkBrownFont">REFINE YOUR TEA EXPERIENCE: DISCOVER ELEGANT ACCESSORIES</h2>
            </div>


<div className='grid-container'>
            {products
                .filter((product) => product.type === 'accessory')
                .map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
</div>


        </div>
            <Footer/>
        </>
    );
};

export default Accessories;