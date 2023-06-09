import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import genmaichaPowder from '../assets/tea/genmaichaPowder.webp';
import genSenchaPour from '../assets/tea/genSenchaPour.webp';
import houjichaPowder from '../assets/tea/houjichaPowder.webp';
import houjichaPour from '../assets/tea/houjichaPour.webp';
import senchaPowder from '../assets/tea/senchaPowder.webp';

const FeaturedCollection: React.FC = () => {
    const [hoveredImg, setHoveredImg] = useState<number | null>(null);

    const imagePaths = [
        {
            default: genmaichaPowder,
            hover: genSenchaPour
        },
        {
            default: houjichaPowder,
            hover: houjichaPour
        },
        {
            default: senchaPowder,
            hover: genSenchaPour
        },
    ];

    return (
        <div className='featured-collection py-16 flex flex-col'>
            <h1 className=''>FEATURED COLLECTION</h1>
            <h2 className='text-2xl font-bold text-center tracking-widest darkBrownFont py-4'>Where Tradition Meets Quality: Our Top-Tier Teas</h2>

            <div className='featured-collection-images'>
                {imagePaths.map((img, index) => (
                    <div className='featured-img-wrapper'>
                    <img
                        src={hoveredImg === index ? img.hover : img.default}
                        onMouseEnter={() => setHoveredImg(index)}
                        onMouseLeave={() => setHoveredImg(null)}
                        alt="Featured Tea"
                        key={index}
                        className={`featured-img featured-img-${index}`}
                    />
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center mt-12'>
            <Link to="/all-products" className='self-center'>
                <button className='HeroButton self-center'>VIEW ALL PRODUCTS</button>
            </Link>
            </div>
        </div>
    );
}

export default FeaturedCollection;
