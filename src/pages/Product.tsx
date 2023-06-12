import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import products, { Product } from '../components/AllData';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

const ProductMobile = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find((p) => p.id.toString() === id);

    const [ingredientsExpanded, setIngredientsExpanded] = useState(false);
    const [howToPrepareExpanded, setHowToPrepareExpanded] = useState(false);
    const [careAndMaintenanceExpanded, setCareAndMaintenanceExpanded] =
        useState(false);

    React.useEffect(() => {
        if (product) {
            const flickityInstance = new Flickity('.carousel', {
                prevNextButtons: false,
                setGallerySize: false,
                adaptiveHeight: true,
                wrapAround: true,
                dragThreshold: 15,
                pauseAutoPlayOnHover: true,
                autoPlay: 6000,
                imagesLoaded: true,
                cellSelector: '.carousel-cell',
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

    return (
        <div className='navPadding'>
            <div className="carousel">
                <div className="carousel-cell">
                    <img src={img} alt={title} />
                </div>
                {otherImgs.map((image, index) => (
                    <div key={index} className="carousel-cell">
                        <img src={image} alt={`Image ${index + 2}`} />
                    </div>
                ))}
            </div>

            <div className='mobileDescription px-6'>
            <h2 className="text-2xl uppercase items-center font-bold tracking-widest darkBrownFont py-1 text-center">{title}</h2>
            <p className='darkBrownFont text-xl tracking-wide font-bold border-b py-2 text-center loraBold'>${price}</p>
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
                        Ingredients
              <span className="accordion-toggle">
                {ingredientsExpanded ? '-' : '+'}
              </span>
                    </h3>
                    {ingredientsExpanded && (
                        <ul className="accordion-content px-4">
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
              <span className="accordion-toggle">
                  How to Prepare
                {howToPrepareExpanded ? '-' : '+'}
              </span>
                    </h3>
                    {howToPrepareExpanded && (
                        <ol className="accordion-content px-4">
                            {howToPrepare.map((step, index) => (
                                <li key={index}>
                                    <span>{step.step}</span>
                                    <span>{step.description}</span>
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
            )}



            {careAndMaintenance && (
                <div>
                    <h3 onClick={toggleCareAndMaintenance} className="accordion-header">
                        Care and Maintenance
              <span className="accordion-toggle">
                {careAndMaintenanceExpanded ? '-' : '+'}
              </span>
                    </h3>
                    {careAndMaintenanceExpanded && (
                        <p className="accordion-content px-4">{careAndMaintenance}</p>
                    )}
                </div>
            )}
            </div>
        </div>
);
};

export default ProductMobile;