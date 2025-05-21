import React from 'react';
import { FaCartPlus } from "react-icons/fa6";

const ItemCard = ({ name, description, price, image, ingredients, onCartClick }) => {

  return (
    <div className="border flex flex-col justify-between rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer">
      <img className="w-full h-40 object-cover rounded-md" src={image} alt={name} />

      <div>
        <h3 className="text-lg font-bold mt-3">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      <div className="flex justify-between items-center mt-3">
        <p className="text-yellow-600 font-medium">Rs. {price}</p>

        <p
          onClick={() => onCartClick({ name, description, price, image, ingredients  })}
          className="bg-yellow-600 text-white p-2 rounded-full cursor-pointer hover:bg-yellow-700 transition"
        >
          <FaCartPlus />
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
