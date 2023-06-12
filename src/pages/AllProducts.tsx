import React from 'react';
import { Link } from 'react-router-dom';
import products, { Product } from '../components/AllData';
import ProductItem from "../components/ProductItem";
import Footer from "../components/Footer";

const AllProducts = () => {
    return (
        <>
            <div className='navPadding'>
                <div className='pageHeader border-b border-t'>
                    <h2 className="text-2xl uppercase items-center font-bold text-center tracking-widest darkBrownFont">EXPLORE OUR COLLECTION: UNLEASH YOUR TEA PASSION</h2>
                </div>

                <div className='grid-container'>
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            </div>

            <Footer/>
        </>
    );
};

export default AllProducts;
