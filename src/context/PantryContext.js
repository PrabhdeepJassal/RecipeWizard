import React, { createContext, useState, useContext } from 'react';

const PantryContext = createContext();

export const PantryProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if (!items.includes(item)) {
      console.log('Adding to pantry:', item);
      setItems(prev => [...prev, item]);
    }
  };

  const removeItem = (item) => {
    console.log('Removing from pantry:', item);
    setItems(prev => prev.filter(i => i !== item));
  };

  const clearPantry = () => setItems([]);

  return (
    <PantryContext.Provider value={{ items, addItem, removeItem, clearPantry }}>
      {children}
    </PantryContext.Provider>
  );
};

export const usePantry = () => useContext(PantryContext);
