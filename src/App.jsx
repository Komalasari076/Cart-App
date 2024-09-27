import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import CartList from "./component/CartList";
import "./App.css";

function App() {
  const [store, setStore] = useState([]);
  const [quantityCart, setQuantityCart] = useState({});

  async function getDataStore() {
    let URL = "https://fakestoreapi.com/products?limit=5";
    const response = await fetch(URL);
    const result = await response.json();
    setStore(result);
  }

  useEffect(() => {
    getDataStore();
  }, []);

  return (
    <div class="md:container md:mx-auto">
      <Navbar quantityCart={quantityCart} />
      <CartList
        store={store}
        quantityCart={quantityCart}
        setQuantityCart={setQuantityCart}
      />
    </div>
  );
}

export default App;
