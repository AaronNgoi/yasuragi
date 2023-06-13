import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import star from '../assets/site/star.svg';
import starEmpty from '../assets/site/starEmpty.svg';
import starHalf from '../assets/site/starHalf.svg';
import { Product } from './AllData';

type ProductItemProps = {
    product: {
        id: number;
        type: string;
        title: string;
        price: number;
        shortDescription: string;
        longDescription: string;
        img: string;
        otherImgs: string[];
        ingredients?: string[];
        howToPrepare?: { step: number; description: string }[];
        productSpecification: {
            [key: string]: string | undefined;
        };
        careAndMaintenance: string;
        reviews: {
            id: number;
            reviewer: string;
            rating: number;
            review: string;
            date: string;
        }[];
    };
    imgClassName?: string;
};

const ProductItem: FC<ProductItemProps> = ({ product, imgClassName }) => {
    const averageRating =
        product.reviews.reduce((total, review) => total + review.rating, 0) / product.reviews.length;
    const roundedRating = Math.ceil(averageRating * 2) / 2;
    const hasHalfStar = roundedRating % 1 !== 0;

    return (
        <div key={product.id} className="flex flex-col items-center mb-4">
            <Link to={`/products/${product.id}`}>
                <img
                    src={product.img}
                    alt={product.title}
                    className={`object-cover cursor-pointer transition duration-300 ${imgClassName}`}
                    onMouseEnter={(e) => {
                        e.currentTarget.src = product.otherImgs[0];
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.src = product.img;
                    }}
                />
            </Link>
            <div className="mt-4 text-center">
                <Link to={`/products/${product.id}`} className=" uppercase tracking-wider hover:text-gray-700">
                    {product.title}
                </Link>
            </div>
            <div>
                <span className=" darkBrownFont font-bold mb-1 loraBold">${product.price}</span>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => {
                        if (index < Math.floor(roundedRating)) {
                            return <img key={index} src={star} alt="star" className="reviewStar" />;
                        } else if (index === Math.floor(roundedRating) && hasHalfStar) {
                            return <img key={index} src={starHalf} alt="half star" className="reviewStar" />;
                        } else {
                            return <img key={index} src={starEmpty} alt="empty star" className="reviewStar" />;
                        }
                    })}
                </div>
                <span className="ml-2 lightBrown">{product.reviews.length} reviews</span>
            </div>
        </div>
    );
};

export default ProductItem;
