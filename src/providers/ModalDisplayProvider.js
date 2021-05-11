import React, { createContext, useState } from 'react'

const ModalDisplayContext = createContext();


const ModalDisplayProvider = () => {
    const [isRemoveButtonOnModal, setIsRemoveButtonOnModal] = useState(false);
    const [isUpdateButtonOnModal, setIsUpdateButtonOnModal] = useState(false);
    // the meat item info from the search bar will be stored in this state value directly below and the values will be accessible within the Meat item modal and will be displayed on it
    const [orderInfoFromSearchBar, orderInfoFromSeachBar] = useState('');

    return (
        <ModalDisplayContext.Provider value={{
            _orderInfoFromSearchBar: [orderInfoFromSearchBar, orderInfoFromSeachBar],
            _isButtonToRemoveOnDom: [isRemoveButtonOnModal, setIsRemoveButtonOnModal],
            _isUpdateButtonOnDom: [isUpdateButtonOnModal, setIsUpdateButtonOnModal],
        }}>

        </ModalDisplayContext.Provider>
    )
}

export default ModalDisplayProvider

