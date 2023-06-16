import React, { useContext } from 'react';
import { CartContext, CartContextValue, CartItem } from '../utils/CartContext';
import { Product, products } from '../components/AllData';
import CloseIcon from '../assets/site/close.svg';
import add from '../assets/site/add.svg';
import minus from '../assets/site/minus.svg';

interface ShoppingCartItemProps {
    product: Product;
    quantity: number;
}



const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ product, quantity }) => {
    const totalPrice = product.price * quantity;

    const cartContext = useContext(CartContext);

    if (!cartContext) {
        return <div>Cart context not available</div>;
    }

    const { updateItemQuantity } = cartContext;

    const increaseQuantity = () => {
        updateItemQuantity(product.id, quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            updateItemQuantity(product.id, quantity - 1);
        }
    };

    const removeFromCart = () => {
        updateItemQuantity(product.id, 0);
    };

    return (
        <div className="border-b py-4 flex flex-row flex-wrap items-center justify-between">
            <img src={product.img} alt={product.title} className="w-20 h-20 mr-4" />
            <div className='mr-4'>
                <h3 className="font-bold text-lg">{product.title}</h3>
                <p>Quantity: {quantity}</p>
                <p>Price: ${totalPrice.toFixed(2)}</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className="counter border inline-flex items-center justify-start">
                    <button className="counterBtn flex-shrink-0 py-2 px-4" onClick={decreaseQuantity}>
                        <img className='h-4 w-4' src={minus} alt="Decrease"/>
                    </button>
                    <span className="counterValue py-2 px-2 text-lg flex-shrink-0 loraFont">{quantity}</span>
                    <button className="counterBtn flex-shrink-0 py-2 px-4" onClick={increaseQuantity}>
                        <img className='h-4 w-4 ' src={add} alt="Increase"/>
                    </button>
                </div>
                <button className="removeBtn flex-shrink-0 py-2 px-4 tracking-wider hover:underline" onClick={removeFromCart}>
                    Remove
                </button>
            </div>
        </div>
    );
};

const ShoppingCart: React.FC = () => {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        return <div>Cart context not available</div>;
    }

    const { shoppingCartOpen, closeShoppingCartOpen } = cartContext;

    const itemsWithDetails = cartContext.cartItems.map((item: CartItem) => {
        const product = products.find(p => p.id === item.id);
        return { product, quantity: item.quantity };
    }).filter(item => item.product);

    const totalCartPrice = itemsWithDetails.reduce((total, item) => total + ((item.product as Product).price * item.quantity), 0);
    const shippingThreshold = 150;
    const remainingToFreeShipping = shippingThreshold - totalCartPrice;

    return (
        <div className={`shoppingCartPopOut ${shoppingCartOpen ? 'slideIn' : 'slideOut'}`}>
            <div className="flex justify-between items-center py-8 px-8">
                <h2 className="text-lg uppercase tracking-widest font-bold">Cart</h2>
                <img src={CloseIcon} alt="Close Icon" className="h-4 w-4" onClick={closeShoppingCartOpen}/>
            </div>

            <p className="py-4 px-6 border-t border-b text-sm">
                {totalCartPrice >= shippingThreshold
                    ? <><span>You are eligible for free shipping!</span></>
                    : <>
                        <span>Spend </span>
                        <span className="loraFont">${remainingToFreeShipping.toFixed(2)}</span>
                        <span> more to qualify for free shipping!</span>
                    </>
                }
            </p>

            {itemsWithDetails.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="px-6">
                    {itemsWithDetails.map((item, index: number) => (
                        <ShoppingCartItem key={index} product={item.product as Product} quantity={item.quantity} />
                    ))}
                </div>
            )}

            <div className="px-6 py-4 border-t">
                <p className="font-bold text-lg">Total Cart Price: ${totalCartPrice.toFixed(2)}</p>
                <p className="mt-4 hover:underline">Add Order Note</p>
                <p className="mt-2 text-sm text-gray-500">Shipping & taxes calculated at checkout</p>
                <button className="mt-4 w-full py-2 HeroButton uppercase addToCartBtn">Checkout</button>
            </div>
        </div>
    );
};

export default ShoppingCart;
