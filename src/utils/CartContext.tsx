import React, { createContext, useState, ReactNode } from 'react';

export  interface CartItem {
    id: number;
    quantity: number;
}

export interface CartContextValue {
    cartItems: CartItem[];
    updateItemQuantity: (itemId: number, quantity: number) => void;
    shoppingCartOpen: boolean;
    toggleShoppingCartOpen: () => void;
    closeShoppingCartOpen: () => void;
}


export const CartContext = createContext<CartContextValue | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [shoppingCartOpen, setShoppingCartOpen] = useState(false);

    const updateItemQuantity = (itemId: number, quantity: number) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === itemId);
            if (existingItem) {
                return quantity === 0
                    ? prevItems.filter(item => item.id !== itemId)
                    : prevItems.map(item =>
                        item.id === itemId ? { ...item, quantity } : item
                    );
            } else {
                return quantity === 0 ? prevItems : [...prevItems, { id: itemId, quantity }];
            }
        });
    };

    const toggleShoppingCartOpen = () => {
        setShoppingCartOpen(!shoppingCartOpen);
    };

    const closeShoppingCartOpen = () => {
        setShoppingCartOpen(false);
    };

    return (
        <CartContext.Provider value={{ cartItems, updateItemQuantity, shoppingCartOpen, toggleShoppingCartOpen, closeShoppingCartOpen }}>
            {children}
        </CartContext.Provider>
    );
};