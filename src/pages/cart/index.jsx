import React, { useEffect, useState } from 'react';
import CartCard from '../../components/card/CartCard';
import Button from "../../components/button/Button";
import { toast } from 'react-toastify';

const Cart = () => {
  const [items, setItems] = useState([]);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);

    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setMyOrders(storedOrders);
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
    const updatedOrders = [...orders, newOrder];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    toast.success(`Order Placed!`);

    localStorage.removeItem('items');
    setItems([]);
    setMyOrders(updatedOrders);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Your Cart</h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <CartCard
              key={index}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
          <div className="flex items-center justify-center mt-6 gap-5">
            <Button type="button" variant='danger' onClick={clearCart}>
              Clear Cart
            </Button>
            <Button type="button" variant='primary' onClick={handleOrderPlace}>
              Place Order
            </Button>
          </div>
        </div>
      )}

      <hr className='border my-20' />

      <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center">My Orders</h2>

      {myOrders.length === 0 ? (
        <p className="text-center text-gray-500">No past orders.</p>
      ) : (
        <ul className="space-y-4">
          {myOrders.map((order, index) => (
            <li key={index} className="border rounded-md p-4 shadow-sm">
              <p><span className="font-semibold">Order ID:</span> {order.id}</p>
              <p><span className="font-semibold">Date:</span> {new Date(order.date).toLocaleString()}</p>
              <p><span className="font-semibold">Items:</span> {order.items.length} item(s)</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
