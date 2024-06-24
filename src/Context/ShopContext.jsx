import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'
export const ShopContext = createContext(null);

//----------------------------------------------------------------

const getDefaultCart = () => {
        let cart = {};
        for (let i = 0; i < all_product.length+1; i++){
            cart[i] = 0;
        }
        return cart;
    }

//--------------------------------------------------------

const ShopContextProvider = (props) => {
    const [cartItmes, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        console.log(cartItmes)
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const totalCartItems = () => {
        let total = 0;
        for(const item in cartItmes){
            if(cartItmes[item]>0){
                total += cartItmes[item];
            }
        }
        return total;
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItmes){
            if(cartItmes[item] > 0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));

                totalAmount += itemInfo.new_price* cartItmes[item];
            }
        }
        return totalAmount;
    }

    

     const contextValue = {all_product, cartItmes, addToCart, removeFromCart, getTotalCartAmount, totalCartItems};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}



export default ShopContextProvider;
