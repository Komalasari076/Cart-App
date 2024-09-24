import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import CartList from "./component/CartList";

function App() {
  const [store, setStore] = useState([]);

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
    <>
      <Navbar />
      <CartList store={store} />
    </>
  );
}

export default App;
