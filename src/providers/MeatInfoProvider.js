import React, { useState, createContext, useEffect } from 'react'


export const MeatInfoContext = createContext();


export const MeatInfoProvider = (props) => {
    const [selectedMeatItemInfoFromSearchBar, setSelectedMeatItemInfoFromSeachBar] = useState('');
    const [selectedAddOns, setSelectedAddOns] = useState([{ name: null, price: 0 }]);
    const [isRemoveButtonOnDom, setIsRemoveButtonOnDom] = useState(false);
    const [isUpdateButtonOnDom, setIsUpdateButtonOnDom] = useState(false);
    const [isCartOrderInfoDisplayedOnModal, setIsCartOrderInfoDisplayedOnModal] = useState(false);

    const [isUserOnCheckoutPage, setIsUserOnCheckoutPage] = useState(false);

    return <MeatInfoContext.Provider value={{
        meatItemInfoSelectedFromSearchBar: [selectedMeatItemInfoFromSearchBar, setSelectedMeatItemInfoFromSeachBar],
        listOfSelectedAddOns: [selectedAddOns, setSelectedAddOns],
        displayCartOrderInfoOnModal: [isCartOrderInfoDisplayedOnModal, setIsCartOrderInfoDisplayedOnModal],
        isButtonToRemoveOnDom: [isRemoveButtonOnDom, setIsRemoveButtonOnDom],
        putUpdateButtonOnDom: [isUpdateButtonOnDom, setIsUpdateButtonOnDom],
        checkoutPageUserIsOn: [isUserOnCheckoutPage, setIsUserOnCheckoutPage],
    }}>
        {props.children}
    </MeatInfoContext.Provider>
}