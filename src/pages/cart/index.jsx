import React, { useEffect, useState } from 'react';
import CartCard from '../../components/card/CartCard';
import Button from "../../components/button/Button";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  const clearCart = () => {
    localStorage.removeItem('items');
    setItems([]);
  };

  const handleOrderPlace = () => {
    if (items.length === 0) return;
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
      id: Date.now(),
      items,
      date: new Date().toISOString(),
    };
    localStorage.setItem('orders', JSON.stringify([...orders, newOrder]));
    localStorage.removeItem('items');
    setItems([]);
  };


  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Your Orders</h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <CartCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
          <div className="flex items-center justify-center mt-6 gap-5">
            <Button type="submit" variant='danger' onClick={clearCart}>
              Clear Cart
            </Button>
            <Button type="submit" variant='primary' onClick={handleOrderPlace}>
              Order Place
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;