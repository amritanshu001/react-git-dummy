import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartStatus, setCartStatus] = useState(false);

  const showCartHandler = () => {
    setCartStatus(true);
  };

  const hideCartHandler = () => {
    setCartStatus(false);
  };

  return (
    <CartProvider>
      {cartStatus && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
