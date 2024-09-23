import { useEffect, useState } from "react";
import Counter from "./Counter";

function CartList() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    getDataStore();
  }, []);

  async function getDataStore() {
    let URL = "https://fakestoreapi.com/products?limit=5";
    const response = await fetch(URL);
    const result = await response.json();

    setStore(result);
  }

  return (
    <div>
      {store.length == 0 ? (
        <h1>Loading</h1>
      ) : (
        store.map((item) => (
          <div key={item.id} className="flex justify-between">
            <div>
              <img src={item.image} alt="" width={50} />
              <p>{item.title}</p>
            </div>

            <p> $ {item.price}</p>

            <Counter />

            <p> $ {item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CartList;
