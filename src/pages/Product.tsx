import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import products, { Product } from '../components/AllData';
import Flickity from 'flickity';
import '../styles/flickity.css';
import 'flickity-fade';
import starEmpty from '../assets/site/starEmpty.svg';
import starHalf from '../assets/site/starHalf.svg';
import starFull from '../assets/site/star.svg';
import add from '../assets/site/add.svg';
import minus from '../assets/site/minus.svg';



interface StarRatingProps {
    rating: number;
}

const ProductMobile: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find((p) => p.id.toString() === id);

    const [ingredientsExpanded, setIngredientsExpanded] = useState(false);
    const [howToPrepareExpanded, setHowToPrepareExpanded] = useState(false);
    const [careAndMaintenanceExpanded, setCareAndMaintenanceExpanded] = useState(false);
    const [reviewsExpanded, setReviewsExpanded] = useState(false);

    useEffect(() => {
        if (product) {
            new Flickity('.carousel', {
                prevNextButtons: false,
                setGallerySize: true,
                adaptiveHeight: true,
                wrapAround: true,
                dragThreshold: 15,
                pauseAutoPlayOnHover: true,
                autoPlay: false,
                imagesLoaded: true,
                cellSelector: '.mobileProductImg',
                fade: true,

            });
        }
    }, [product]);

    if (!product) {
        return <div>Product not found</div>;
    }

    const {
        title,
        price,
        shortDescription,
        longDescription,
        img,
        otherImgs,
        ingredients,
        howToPrepare,
        productSpecification,
        careAndMaintenance,
    } = product;



    const toggleIngredients = () => {
        setIngredientsExpanded(!ingredientsExpanded);
    };

    const toggleHowToPrepare = () => {
        setHowToPrepareExpanded(!howToPrepareExpanded);
    };

    const toggleCareAndMaintenance = () => {
        setCareAndMaintenanceExpanded(!careAndMaintenanceExpanded);
    };

    const toggleReviews = () => {
        setReviewsExpanded(!reviewsExpanded);
    };


    const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img key={i} src={starFull} alt='star' className="reviewStar"/>);
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars.push(<img key={i} src={starHalf} alt='half star' className="reviewStar"/>);
            } else {
                stars.push(<img key={i} src={starEmpty} alt='empty star' className="reviewStar"/>);
            }
        }
        return <div className='flex items-center'>{stars}</div>;
    };

    return (
        <div className='navPadding'>
            <div className='mobileCarouselWrapper'>
            <div className="carousel mobileProducts">
                <div className="carousel-cell mobileProductImgCell">
                    <img className='mobileProductImg carouselImage' src={img} alt={title} />
                </div>
                {otherImgs.map((image, index) => (
                    <div key={index} className=" mobileProductImgCell">
                        <img className='mobileProductImg carouselImage carousel-cell' src={image} alt={`Image ${index + 2}`} />
                    </div>
                ))}
            </div>
            </div>

            <div className='mobileDescription px-6'>
            <h2 className="text-2xl uppercase items-center font-bold tracking-widest darkBrownFont py-1 text-center">{title}</h2>
            <p className='darkBrownFont text-xl tracking-wide font-bold border-b pt-2 pb-3 text-center loraBold'>${price}</p>
            <p className='py-4'>{shortDescription}</p>
            <p className='mb-6'>{longDescription}


                {productSpecification && Object.keys(productSpecification).length > 0 && (
                    <div className='mt-3'>
                        {/*<h3 className='font-bold'>Product Specifications</h3>*/}
                        <ul>
                            {Object.entries(productSpecification).map(([key, value]) => (
                                <li key={key}>
                                    <span className='capitalize'>{key}: </span>
                                    <span>{value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </p>
            </div>

            {/* Number State Counter + */}
            {/* ADD TO CART button */}


            {/* BUY IT NOW button */}


            <div className='px-6'>
            {ingredients && ingredients.length > 0 && (
                <div>
                    <h3 onClick={toggleIngredients} className="accordion-header darkBrownFont">
                        <div className='flex justify-between items-center'>
                            <div>
                                Ingredients
                            </div>
                            <div>
                                <img className='h-4 w-4' src={ingredientsExpanded ? minus : add} alt={ingredientsExpanded ? 'Collapse' : 'Expand'} />
                            </div>
                        </div>
                    </h3>
                    {ingredientsExpanded && (
                        <ul className="accordion-content">
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            {howToPrepare && howToPrepare.length > 0 && (
                <div>
                    <h3 onClick={toggleHowToPrepare} className="accordion-header">
                        <div className='flex justify-between items-center'>
                            <div>
                                How to Prepare
                            </div>
                            <div>
                                <img className='h-4 w-4' src={howToPrepareExpanded ? minus : add} alt={howToPrepareExpanded ? 'Collapse' : 'Expand'} />
                            </div>
                        </div>
                    </h3>
                    {howToPrepareExpanded && (
                        <ol className="accordion-content">
                            {howToPrepare.map((step, index) => (
                                <li key={index}>
                                    <span className='loraFontBold mr-3'>{step.step}</span>
                                    <span className=''>{step.description}</span>
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
            )}



            {careAndMaintenance && (
                <div>
                    <h3 onClick={toggleCareAndMaintenance} className="accordion-header">
                        <div className='flex justify-between items-center'>
                            <div>
                                Care and Maintenance
                            </div>
                            <div>
                                <img className='h-4 w-4' src={careAndMaintenanceExpanded ? minus : add} alt={careAndMaintenanceExpanded ? 'Collapse' : 'Expand'} />
                            </div>
                        </div>
                    </h3>
                    {careAndMaintenanceExpanded && (
                        <p className="accordion-content">{careAndMaintenance}</p>
                    )}
                </div>
            )}

                {product.reviews && product.reviews.length > 0 && (
                    <div>
                        <h3 onClick={toggleReviews} className="accordion-header">
                            <div className='flex justify-between items-center' >
                                <div>
                                    Reviews  (<span className='loraFont mx-1'>{product.reviews ? product.reviews.length : 0}</span>)
                                </div>
                                <div>
                                    <img className='h-4 w-4' src={reviewsExpanded ? minus : add} alt={reviewsExpanded ? 'Collapse' : 'Expand'} />
                                </div>
                            </div>
                        </h3>
                        {reviewsExpanded && (
                            <div className="accordion-content">
                                {product.reviews.map((review, index) => (
                                    <div key={index} className=" p-4 my-2">
                                        <div className="flex justify-between items-center">
                                            <p className='font-semibold'>{review.reviewer}</p>
                                            <p>{review.date}</p>
                                        </div>
                                        <div className=''>
                                            <StarRating rating={review.rating}/>
                                            <p className='text-sm mt-2'>{review.review}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

        </div>
            );
            };

            export default ProductMobile;