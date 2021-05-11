import React from 'react';
import Pages from "./components/Pages";
import { IsModalOpenProvider } from './providers/IsModalOpenProvider';
import { CartInfoProvider } from "./providers/CartInfoProvider";
import { ModalDisplayProvider } from "./providers/ModalDisplayProvider";


const App = () => {

    return <IsModalOpenProvider>
        <CartInfoProvider>
            <ModalDisplayProvider>
                <Pages />
            </ModalDisplayProvider>
        </CartInfoProvider>
    </IsModalOpenProvider>
};

export default App
