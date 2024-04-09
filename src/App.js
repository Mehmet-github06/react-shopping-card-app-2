import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Amazon from "./components/amazon";
import Cart from "./components/cart";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    const ind = card.indexOf(item);
    const arr = cart;
    arr[ind].amoount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <React.Fragment>
      <Navbar setshow={setShow} size={cart.length} />
      {show ? (
        <Amazon />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      {/* <Amazon handleClick={handleClick}/> */}
    </React.Fragment>
  );
}

export default App;
