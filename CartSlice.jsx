const addItem = (item) => {
  console.log("Item added", item);
};

const removeItem = (id) => {
  console.log("Item removed", id);
};

const updateQuantity = (id, quantity) => {
  console.log("Quantity updated", id, quantity);
};

export { addItem, removeItem, updateQuantity };
