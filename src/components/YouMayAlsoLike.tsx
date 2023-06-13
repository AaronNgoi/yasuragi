import React from 'react';
import { Link } from 'react-router-dom';
import products from './AllData';
import ProductItem from './ProductItem';

const FeaturedCollection: React.FC<{ currentProductId: number }> = ({ currentProductId }) => {
    const otherProducts = products.filter((product) => product.id !== currentProductId);
    const randomProductIds = getRandomProductIds(otherProducts, 3);
    const featuredProducts = products.filter((product) => randomProductIds.includes(product.id));

    return (
        <div className='w-full flex items-center justify-center border-t'>
        <div className="featured-collection customYouMayAlsoLike py-12 flex flex-col">
            <h1 className="">YOU MAY ALSO LIKE</h1>
            <h2 className="text-2xl font-bold text-center tracking-widest darkBrownFont py-4">
                Discover Related Gems: Recommendations Tailored to Your Preferences
            </h2>

            <div className="featured-collection-images">
                {featuredProducts.map((product, index) => (
                    <ProductItem key={product.id} product={product} imgClassName={`featured-img-${index}`} />
                ))}
            </div>
        </div>
        </div>
    );
};

function getRandomProductIds(products: any[], count: number): number[] {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, count).map((product) => product.id);
}

export default FeaturedCollection;
