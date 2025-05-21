import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
    setTotalOrders(storedOrders.length);

    const total = storedOrders.reduce((sum, order) => {
      return sum + order.items.reduce((itemSum, item) => itemSum + Number(item.price || 0), 0);
    }, 0);
    setTotalEarnings(total);
  };

  const deleteOrder = (id) => {
    const updatedOrders = orders.filter(order => order.id !== id);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    toast.info(`Order ${id} deleted`);
    loadOrders(); // Refresh state
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow text-center border">
          <h2 className="text-xl font-semibold text-gray-700">Total Orders</h2>
          <p className="text-2xl font-bold text-green-600">{totalOrders}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center border">
          <h2 className="text-xl font-semibold text-gray-700">Total Earnings</h2>
          <p className="text-2xl font-bold text-blue-600">Rs. {totalEarnings.toFixed(2)}</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-yellow-600">All Order</h2>
      {orders.length === 0 ? (
        <p className="text-gray-500">No orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div key={index} className="border p-4 rounded shadow bg-white relative">
              <button
                className="absolute top-2 right-2 bg-red-500 text-white p-3 rounded-full text-xs hover:bg-red-600"
                onClick={() => deleteOrder(order.id)}
              >
                <MdDelete />
              </button>
              <p className="font-semibold">Order ID: {order.id}</p>
              <p className="text-sm text-gray-600 mb-2">Date: {new Date(order.date).toLocaleString()}</p>

              <ul className="list-disc pl-5 space-y-1">
                {order.items.map((item, idx) => (
                  <li key={idx} className="text-sm">
                    <span className="font-medium">{item.name}</span> — Rs. {item.price}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
