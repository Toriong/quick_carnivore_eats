import React, { useState, useEffect, useContext, useRef } from 'react'
import { CartInfoContext } from "../providers/CartInfoProvider";

const Cart = () => {
    const { _confirmedOrdersInfo, _updateCartInfo } = useContext(CartInfoContext);

    const [confirmedOrdersInfo, setConfirmedOrdersInfo] = _confirmedOrdersInfo;
    const [updateCartInfo, setUpdateCartInfo] = _updateCartInfo

    const [isRemoveButtonOnModal, setIsRemoveButtonOnModal] = useState(false);
    const [isUpdateButtonOnModal, setIsUpdateButtonOnModal] = useState(false);


    // checking and getting the items from local storage and storing them into the state context value of 'confirmedOrdersInfo' onmount
    // this will check if there is anything in the local storage. If there are values stored in the local storage, then stored them into confirmedOrdersInfo
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("confirmed orders") !== null)) {
            setConfirmedOrdersInfo(JSON.parse(localStorage.getItem("confirmed orders")));
            setUpdateCartInfo(true);
        };
    }, []);

    // in order to avoid unnecessary re-renderings by using a state value to get the values below, the useRef will preserve the values through each re-rendering and will update these values when the 'updateCartInfo' is set to true
    const cartQuantityTotal = useRef(0);
    const cartPriceTotal = useRef(0);

    // calculates the total amount of items and the total price of orders in the cart
    useEffect(() => {
        if (updateCartInfo) {
            // num === number, X = any number
            cartQuantityTotal.current = confirmedOrdersInfo.map((order) => order.confirmedOrderQuantity).reduce((numA, numB) => numA + numB);
            cartPriceTotal.current = confirmedOrdersInfo.map((order) => parseFloat(order.totalOrderPrice)).reduce((numA, numB) => numA + numB);
            setUpdateCartInfo(false);
        }
    }, [confirmedOrdersInfo, updateCartInfo]);

    return (
        <div>

        </div>
    )
}

export default Cart
