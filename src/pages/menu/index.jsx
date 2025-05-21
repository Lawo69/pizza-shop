import React, { useState } from 'react';
import menuData from '../../constants/menuData.json';
import ItemCard from '../../components/card/ItemCard';
import DetailWindow from '../../components/popups/DetailWindow';

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCartClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="pt-4">
      <h2 className="text-2xl font-semibold mb-6 text-yellow-600 text-center">Menu Page</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {menuData.map(pizza => (
          <ItemCard
            key={pizza.id}
            name={pizza.name}
            description={pizza.description}
            price={pizza.price}
            image={pizza.image}
            ingredients ={pizza.ingredients}
            onCartClick={handleCartClick}
          />
        ))}
      </div>

      {/* Popups */}
      <DetailWindow data={selectedItem} onClose={handleClose} />
    </div>
  );
};

export default Menu;
