function CartItem() {
  const cartItems = [
    { id: 1, name: "Aloe Vera", quantity: 2, price: 10 },
    { id: 2, name: "Snake Plant", quantity: 1, price: 15 }
  ];

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
