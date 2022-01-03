import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
    accounts: [
        {
          id : 1,
          account_no: 12,
          name: "Venktesh Singh",
          money: 1000,
        },
        {
          id : 2,
          account_no: 22,
          name: "Rajeev",
          money:1200
        }
    ]
  };

//Initialize Cotext API
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addAccount(account) {
    dispatch({
      type: "ADD_ACCOUNT",
      payload: account
    });
  }

  function editAccount(account) {
    dispatch({
      type: "EDIT_ACCOUNT",
      payload: account
    });
  }

  function removeAccount(id) {
    dispatch({
      type: "REMOVE_ACCOUNT",
      payload: id
    });
  }

  return (
    //Return Context Data 
    <GlobalContext.Provider
      value={{
        accounts: state.accounts,
        addAccount,
        editAccount,
        removeAccount
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};