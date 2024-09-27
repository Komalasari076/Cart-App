function Counter({ quantityCart, setQuantityCart }) {
  const decrement = () => {
    if (quantityCart === 0) return;
    setQuantityCart(quantityCart - 1);
  };

  const increment = () => {
    setQuantityCart(quantityCart + 1);
  };

  return (
    <div className="w-32 ">
      <button
        onClick={decrement}
        className=" border-2 rounded-lg border-indigo-300 px-2"
      >
        -
      </button>
      <span className="mx-4 font-semibold">{quantityCart}</span>
      <button
        onClick={increment}
        className=" border-2 rounded-lg border-indigo-300 px-2"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
