import React from 'react';
import menuData from '../../constants/menuData.json';

const Menu = () => {
  return (
    <div className="pt-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {menuData.map(pizza => (
          <div className="border flex flex-col justify-between rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer">

            <div>
                <h3 className="text-lg font-bold mt-3">{pizza.name}</h3>
                <p className="text-gray-600 mt-2">{pizza.description}</p>
            </div>

            <div className="flex justify-between items-center mt-3">
                <p className="text-yellow-600 font-medium">Rs. {pizza.price}</p>
            </div>

            <div>
            <h4 className="text-md font-semibold mb-1 text-gray-800">Ingredients:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {pizza.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
