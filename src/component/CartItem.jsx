import Counter from "./Counter";

function CartItem({ item, quantityCart, setQuantityCart }) {
  return (
    <div
      key={item.id}
      className="flex justify-between rounded-lg shadow-lg shadow-indigo-500/50 p-4 mb-8"
    >
      <div className="flex">
        <img
          src={item.image}
          alt="Produk"
          width={70}
          className="mr-4 shadow-lg"
        />
        <p className="w-64 font-medium mr-2">{item.title}</p>
      </div>

      <div>
        <p className="w-20 font-medium"> $ {item.price}</p>
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
        <p className="w-32 font-medium ml-2">
          total $ {(item.price * quantityCart).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default CartItem;
