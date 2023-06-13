import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from './AllData';
import ProductItem from "./ProductItem";

const FeaturedCollection: React.FC = () => {
    const featuredProductIds = [1, 3, 4];
    const featuredProducts = products.filter(product => featuredProductIds.includes(product.id));

    return (
        <div className='featured-collection py-16 flex flex-col'>
            <h1 className=''>FEATURED COLLECTION</h1>
            <h2 className='text-2xl font-bold text-center tracking-widest darkBrownFont py-4'>Where Tradition Meets Quality: Our Top-Tier Teas</h2>

            <div className='featured-collection-images'>
                {featuredProducts.map((product, index) => (
                    <ProductItem key={product.id} product={product} imgClassName={`featured-img-${index}`} />
                ))}
            </div>

            <div className='flex items-center justify-center mt-8'>
                <Link to="/all-products" className='self-center'>
                    <button className='HeroButton self-center'>VIEW ALL PRODUCTS</button>
                </Link>
            </div>
        </div>
    );
}

export default FeaturedCollection;