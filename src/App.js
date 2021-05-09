import React, { useState, useEffect, useContext } from 'react';
import Pages from "./components/Pages";
import { ModalConditionalsDisplayAndInfoProvider } from './providers/ModalConditionalsDisplayAndInfoProvider'
import { CartInfoProvider } from "./providers/CartInfoProvider";


const App = () => {

    return <ModalConditionalsDisplayAndInfoProvider>
        <CartInfoProvider>
            <Pages />
        </CartInfoProvider>
    </ModalConditionalsDisplayAndInfoProvider>
};

export default App
