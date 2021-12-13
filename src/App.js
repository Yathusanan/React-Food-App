import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CardProvider";

function App() {

  const [isShowCart, setIsShowCart] = useState(false);

  const onShowCart = (props) => {
    setIsShowCart(true);
  };

  const onHideCart = (props) => {
    setIsShowCart(false);
  };

  return (
    <div>
      <CartProvider>
        {isShowCart && <Cart hideCart={onHideCart}/>}
        <Header showCart={onShowCart}/>
        <main>
          <Meals/>
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
