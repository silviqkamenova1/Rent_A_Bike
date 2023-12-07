import React, { useState } from 'react';

const ProductList = [
  { id: 1, name: 'Product 1', price: 20 },
  { id: 2, name: 'Product 2', price: 30 },
  { id: 3, name: 'Product 3', price: 15 },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    setTotal(total + product.price);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    setTotal(total - product.price);
  };
  async function solve(){
    const allusers = await fetch('http://localhost:3030/users')
    let result = await allusers.json()
    return result;
  }
  console.log(solve);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {ProductList.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h3>Cart</h3>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </li>
        ))}
      </ul>

      <p>Total: ${total}</p>
    </div>
  );
};

export default ShoppingCart;