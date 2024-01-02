//Function for  rounding a numerical value to two decimal places and formatting it as a string.
export const addDeciamls = (num) => {
    return (Math.round(num*100)/100).toFixed(2);
}

export const updateCart = (state) => {

    //Calculate the items price
    const itemsPrice = state.cartItems.reduce((acc,item) => 
        acc +  (item.price * 100 * item.qty) /100
    ,0);
    state.itemsPrice = addDeciamls(itemsPrice);

    //Calculate the shipping price
    const shippingPrice = itemsPrice>100?0:10;
    state.shippingPrice = addDeciamls(shippingPrice);

    //Calculate the tax price
    const taxPrice =0.15*itemsPrice;
    state.taxPrice = addDeciamls(taxPrice);

    //Calculate the total price
    const totalPrice = itemsPrice+shippingPrice+taxPrice;
    state.totalPrice = addDeciamls(totalPrice);

    //Save the cart to local storage
    localStorage.setItem('cart',JSON.stringify(state));
    return state;
};