import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
    accounts: [
        {
          id : 1,
          account_no: 1212,
          name: "Badri",
          money: 1000,
        },
        {
          id : 2,
          account_no: 2222,
          name: "Rajeev",
          money:1200
        },
        {
          id : 3,
          account_no: 1213,
          name: "Rakesh",
          money: 10000,
        },
        {
          id : 4,
          account_no: 22122,
          name: "Rajesh",
          money:11200
        },
        {
          id : 5,
          account_no: 12133,
          name: "Kapil",
          money: 110000,
        },
        {
          id : 6,
          account_no: 22123,
          name: "Ram",
          money:11200
        },
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
