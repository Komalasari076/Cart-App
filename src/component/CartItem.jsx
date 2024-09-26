import Counter from "./Counter";

function CartItem({ item, quantityCart, setQuantityCart }) {
  return (
    <div key={item.id} className="flex justify-between">
      <div>
        <img src={item.image} alt="Produk" width={50} />
        <p>{item.title}</p>
      </div>

      <p> $ {item.price}</p>

      <Counter
        quantityCart={quantityCart}
        setQuantityCart={(newQuantityCart) =>
          setQuantityCart(item.id, newQuantityCart)
        }
      />

      <p> total $ {item.price * quantityCart}</p>
    </div>
  );
}

export default CartItem;
