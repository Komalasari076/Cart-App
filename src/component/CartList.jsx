import CartItem from "./CartItem";

function CartList({ store, quantityCart, setQuantityCart }) {
  const handleQuantityChange = (id, newQuantityCart) => {
    setQuantityCart((oldQuantityCart) => ({
      ...oldQuantityCart,
      [id]: newQuantityCart,
    }));
  };

  return (
    <div>
      {store.length == 0 ? (
        <h1>Loading</h1>
      ) : (
        store.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            quantityCart={quantityCart[item.id] || 0}
            setQuantityCart={handleQuantityChange}
          />
        ))
      )}
    </div>
  );
}

export default CartList;
