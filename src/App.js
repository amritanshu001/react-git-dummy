import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

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
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
