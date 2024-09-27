import CartShop from "../assets/cart-shopping.svg";
import '../App.css'

function Navbar({ quantityCart }) {
  const totalItems = Object.values(quantityCart).reduce(
    (total, quantity) => total + quantity,
    0
  );

  return (
    <div class="flex justify-between my-10">
      <h1 class="font-bold text-2xl">MyStore</h1>
      <div>
        <div class="...">
          <img src={CartShop} alt="" width={40} />
        </div>
        <div class="-mt-6 total bg-indigo-600 ..."> {totalItems}</div>
      </div>
    </div>
  );
}

export default Navbar;
