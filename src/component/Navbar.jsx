import CartShop from "../assets/cart-shopping.svg";
import "../App.css";

function Navbar({ quantityCart }) {
  const totalItems = Object.values(quantityCart).reduce(
    (total, quantity) => total + quantity,
    0
  );

  return (
    <div className="flex justify-between bg-indigo-300 rounded-lg my-10 p-4">
      <h1 className="font-bold text-2xl">MyStore</h1>

      <div>
        <div>
          <img src={CartShop} alt="Cart Shop" width={40} />
        </div>

        <div className="-mt-6 total font-semibold shadow-lg shadow-indigo-500/40 bg-indigo-950">
          {totalItems}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
