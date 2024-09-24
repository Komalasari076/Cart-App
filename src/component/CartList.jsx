import CartItem from "./CartItem";

function CartList({ store }) {
  return (
    <div>
      {store.length == 0 ? (
        <h1>Loading</h1>
      ) : (
        store.map((item) => <CartItem key={item.id} item={item} />)
      )}
    </div>
  );
}

export default CartList;
