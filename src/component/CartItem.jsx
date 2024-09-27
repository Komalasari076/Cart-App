import Counter from "./Counter";

function CartItem({ item, quantityCart, setQuantityCart }) {
  return (
    <div key={item.id} className="flex justify-between items-start">
      <div class="flex mb-8">
        <img
          src={item.image}
          alt="Produk"
          width={70}
          class="mr-3 drop-shadow-md"
        />
        <p class="w-64">{item.title}</p>
      </div>

      <div>
        <p className="w-20"> $ {item.price}</p>
      </div>

      <div>
        <Counter
          quantityCart={quantityCart}
          setQuantityCart={(newQuantityCart) =>
            setQuantityCart(item.id, newQuantityCart)
          }
        />
      </div>

      <div>
        <p className="w-32"> total $ {item.price * quantityCart}</p>
      </div>
    </div>
  );
}

export default CartItem;
