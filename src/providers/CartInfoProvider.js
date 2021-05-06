import React, { createContext, useState } from 'react'

export const CartInfoContext = createContext()


// all info relating to the cart
export const CartInfoProvider = (props) => {

    const confirmedCartOrders = JSON.parse(localStorage.getItem("confirmed orders")) === null ? [{
        id: null,
        restaurantName: null,
        infoOfMainMeatItem: null,
        confirmedAddOnsToOrder: null,
        allAddOns: null,
        confirmedOrderQuantity: 0,
        totalMeatPrice: 0,
        totalConfirmedAddOnPrice: 0,
        totalOrderPrice: 0
    }] : JSON.parse(localStorage.getItem("confirmed orders"));

    const cartPriceTotal = confirmedCartOrders.map((order) => parseFloat(order.totalOrderPrice)).reduce((price1, priceN) => (price1 + priceN));

    const cartQuantityTotal = confirmedCartOrders.map((order) => order.confirmedOrderQuantity).reduce((numN, numNMinus1) => numN + numNMinus1);

    const [confirmedOrdersInfo, setConfirmedOrdersInfo] = useState(confirmedCartOrders);
    const [cartTotalPrice, setCartTotalPrice] = useState(cartPriceTotal);
    const [numberOfCartItems, setNumberOfCartItems] = useState(cartQuantityTotal);
    // this boolean will be set to true in the navbar component, then, when the SelectedMeatItemViewerToOrderModal component is invoked, as a result of the true boolean, it will compute the price of add-ons that the user selected in their order within a useEffect
    const [computeConfirmedAddOnsOfCartOrder, setComputeConfirmedAddOnsOfCartOrder] = useState(false);


    return <CartInfoContext.Provider value={{
        totalPriceOfCart: [cartTotalPrice, setCartTotalPrice],
        cartItemsTotal: [numberOfCartItems, setNumberOfCartItems],
        findSumOfConfirmedAddOnsOfCartOrder: [computeConfirmedAddOnsOfCartOrder, setComputeConfirmedAddOnsOfCartOrder],
        ordersInfoConfirmed: [confirmedOrdersInfo, setConfirmedOrdersInfo]
    }}>
        {props.children}
    </CartInfoContext.Provider>

}
