import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

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
      <Fragment>
        {isShowCart && <Cart hideCart={onHideCart}/>}
        <Header showCart={onShowCart}/>
        <main>
          <Meals/>
        </main>
      </Fragment>
    </div>
  );
}

export default App;
