import CartShop from "../assets/cart-shopping.svg";

function Navbar() {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-lg">MyStore</h1>
      <img src={CartShop} alt="" width={40} />
    </div>
  );
}

export default Navbar;
