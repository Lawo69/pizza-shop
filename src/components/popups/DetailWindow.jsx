import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import Button from "../button/Button";
import { toast } from 'react-toastify';

const DetailWindow = ({ data, onClose }) => {
  if (!data) return null;

  const handleOrder = () => {
    const existingOrders = JSON.parse(localStorage.getItem('items')) || [];
    const updatedOrders = [...existingOrders, data];
    localStorage.setItem('items', JSON.stringify(updatedOrders));

    console.log("Cart Saved:", data);
    toast.success(`${data.name} added to Cart!`);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-1 right-1 text-xl font-bold text-gray-600 hover:text-black"
        >
          <IoIosCloseCircle />
        </button>

        <img src={data.image} alt={data.name} className="w-full h-40 object-cover rounded mb-4" />
        <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
        <p className="text-gray-700 mb-4">{data.description}</p>
        <p className="text-yellow-700 font-bold text-lg mb-3">Rs. {data.price}</p>

        {data.ingredients && (
          <div>
            <h4 className="text-md font-semibold mb-1 text-gray-800">Ingredients:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {data.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <Button
          type="button"
          variant='primary'
          className="w-full mt-3"
          onClick={handleOrder}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default DetailWindow;
