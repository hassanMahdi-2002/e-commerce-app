import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("freshCartItems");
        
        return savedCart ? JSON.parse(savedCart) : [];
    });

  
    useEffect(() => {
        localStorage.setItem("freshCartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // دالة إضافة منتج للسلة
    function addToCart(product) {
        setCartItems((prevCart) => {
            const existingProduct = prevCart.find((item) => item._id === product._id);

            if (existingProduct) {
                return prevCart.map((item) =>
                    item._id === product._id ? { ...item, count: item.count + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, count: 1 }];
            }
        });
        console.log("add product sucsess"); 
    }

    function removeItem(id) {
        setCartItems((prevCart) => prevCart.filter((item) => item._id !== id));
    }

   
    function updateItemCount(id, newCount) {
        if (newCount === 0) {
            removeItem(id);
            return;
        }
        
        setCartItems((prevCart) =>
            prevCart.map((item) =>
                item._id === id ? { ...item, count: newCount } : item
            )
        );
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItem, updateItemCount }}>
            {children}
        </CartContext.Provider>
    );
}