import React, { useState, createContext } from 'react'

export const ModalConditionalsContext = createContext()

// the conditionals for opening a modal
export const ModalsConditionalsProvider = (props) => {


    const [isOrderMeatItemOrGoToRestaurantMenuModalOpen, setIsOrderMeatItemOrGoToRestaurantMenuModalOpen] = useState(false);
    const [isCreateNewCartModalOpen, setIsCreateNewCartModalOpen] = useState(false);
    const [openMeatItemModalFromSearchBar, setOpenMeatItemModalFromSearchBar] = useState(false);
    const [isSearchResultsContainerOpen, setIsSearchResultsContainerOpen] = useState(false)

    return <ModalConditionalsContext.Provider value={{
        isGoToResaurantMenuOrOrderMeatItemModalOpen: [isOrderMeatItemOrGoToRestaurantMenuModalOpen, setIsOrderMeatItemOrGoToRestaurantMenuModalOpen],
        openCreateNewCartModal: [isCreateNewCartModalOpen, setIsCreateNewCartModalOpen],
        isMeatItemModalOpenFromSearchBar: [openMeatItemModalFromSearchBar, setOpenMeatItemModalFromSearchBar],
        openSearchResultsContainer: [isSearchResultsContainerOpen, setIsSearchResultsContainerOpen],
    }
    }>
        {props.children}
    </ModalConditionalsContext.Provider>
}


