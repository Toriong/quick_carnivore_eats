import React, { useState, createContext } from 'react'

export const ModalConditionalsAndInfoContext = createContext()

// the conditionals for opening a modal and what will be displayed on the modal
export const ModalConditionalsAndInfoProvider = (props) => {

    // selectedAddOns = the potential addOns that the user selected, but may be unselected when determining their order
    const [selectedAddOns, setSelectedAddOns] = useState([{ name: null, price: 0 }]);
    const [orderInfoFromSearchBar, orderInfoFromSeachBar] = useState('');

    // what buttons will be on the modal
    const [isRemoveButtonOnModal, setIsRemoveButtonOnModal] = useState(false);
    const [isUpdateButtonOnModal, setIsUpdateButtonOnModal] = useState(false);

    // the conditionals for opening the modal
    const [isModalWithCartInfoOpen, setIsModalWithCartInfoOpen] = useState(false);
    // is the meat item modal displaying the meat item from the search bar? 
    const [isMeatModalFromSearchBarOpen, setIsMeatModalFromSearchBarOpen] = useState(false);
    const [isSearchResultsContainerOpen, setIsSearchResultsContainerOpen] = useState(false);
    const [isNavModalOpen, setIsNavModalOpen] = useState(false);

    return <ModalConditionalsAndInfoContext.Provider value={{
        _openMeatItemModalFromSearchBar: [isMeatModalFromSearchBarOpen, setIsMeatModalFromSearchBarOpen],
        _isButtonToRemoveOnDom: [isRemoveButtonOnModal, setIsRemoveButtonOnModal],
        _isUpdateButtonOnDom: [isUpdateButtonOnModal, setIsUpdateButtonOnModal],
        _selectedAddOns: [selectedAddOns, setSelectedAddOns],
        _isModalWithCartInfoOpen: [isModalWithCartInfoOpen, setIsModalWithCartInfoOpen],
        _isOrderMeatOrGoToRestrModalOpen: [isNavModalOpen, setIsNavModalOpen],
        _isSearchResultsContainerOpen: [isSearchResultsContainerOpen, setIsSearchResultsContainerOpen],
        _orderInfoFromSearchBar: [orderInfoFromSearchBar, orderInfoFromSeachBar]
    }}>
        {props.children}
    </ModalConditionalsAndInfoContext.Provider>
};


