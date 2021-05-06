import React from 'react';
import ReactDOM from 'react-dom';
import Pages from "./components/Pages";
import { MeatInfoProvider } from "./providers/MeatInfoProvider";
import { ModalsConditionalsProvider } from "./providers/ModalsConditionalsProvider";
import { CartInfoProvider } from "./providers/CartInfoProvider";



ReactDOM.render(
  <React.StrictMode>
    <ModalsConditionalsProvider>
      <MeatInfoProvider>
        <CartInfoProvider>
          <Pages />
        </CartInfoProvider>
      </MeatInfoProvider>
    </ModalsConditionalsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



