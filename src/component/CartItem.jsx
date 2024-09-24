import { useState } from "react";
import Counter from "./Counter";

function CartItem({ item }) {
  const [quantityCart, setQuantityCart] = useState(0);

  return (
    <div key={item.id} className="flex justify-between">
      <div>
        <img src={item.image} alt="Produk" width={50} />
        <p>{item.title}</p>
      </div>

      <p> $ {item.price}</p>

      <Counter quantityCart={quantityCart} setQuantityCart={setQuantityCart} />

      <p> total $ {item.price * quantityCart}</p>
    </div>
  );
}

export default CartItem;
