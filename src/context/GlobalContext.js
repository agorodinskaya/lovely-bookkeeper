import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// intitialize state :
const initState = {
  transactions: [
    { id: 1, text: "Codecademy course", amount: -40 },
    { id: 2, text: "Phone charge", amount: -25 },
    { id: 3, text: "Cofee", amount: -18 },
  ],
};

// creating context :
export const GlobalContext = createContext(initState);

// provider component:
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
