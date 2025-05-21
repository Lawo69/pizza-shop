import React from 'react';
import { FaCartPlus } from "react-icons/fa6";

const CartCard = ({ name, description, price }) => {

  return (
    <div className="border flex flex-col justify-between rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer">

      <div>
        <h3 className="text-lg font-bold mt-3">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      <div className="flex justify-between items-center mt-3">
        <p className="text-yellow-600 font-medium">Rs. {price}</p>
      </div>
    </div>
  );
};

export default CartCard;
