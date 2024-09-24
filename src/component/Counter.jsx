function Counter({ quantityCart, setQuantityCart }) {
  const decrement = () => {
    if (quantityCart === 0) return;
    setQuantityCart(quantityCart - 1);
  };

  const increment = () => {
    setQuantityCart(quantityCart + 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{quantityCart}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
