import { createContext, useState } from 'react';

// create a context object
const SelectedFoodContext = createContext();

// provide data to components
export const SelectedFoodProvider = ({ children }) => {
  const [selectedFoodItems, setSelectedFoodItems] = useState([]);

  // pass state to children
  return (
    <SelectedFoodContext.Provider value={{ selectedFoodItems, setSelectedFoodItems }}>
      {children}
    </SelectedFoodContext.Provider>
  );
};

export default SelectedFoodContext;