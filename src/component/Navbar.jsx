import CartShop from "../assets/cart-shopping.svg";

function Navbar({ quantityCart }) {
  const totalItems = Object.values(quantityCart).reduce(
    (total, quantity) => total + quantity,
    0
  );

  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-lg">MyStore</h1>
      <p>
        <img src={CartShop} alt="" width={40} />
        {totalItems}
      </p>
    </div>
  );
}

export default Navbar;
