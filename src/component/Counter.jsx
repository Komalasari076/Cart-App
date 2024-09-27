function Counter({ quantityCart, setQuantityCart }) {
  const decrement = () => {
    if (quantityCart === 0) return;
    setQuantityCart(quantityCart - 1);
  };

  const increment = () => {
    setQuantityCart(quantityCart + 1);
  };

  return (
    <div className="w-24 ">
      <button onClick={decrement} className="border-solid border-2 border-sky-500 px-1">-</button>
      <span className="mx-4">{quantityCart}</span>
      <button onClick={increment} className="border-solid border-2 border-sky-500 px-1">+</button>
    </div>
  );
}

export default Counter;
