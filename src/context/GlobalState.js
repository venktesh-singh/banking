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
        },
        {
          id : 3,
          account_no: 122,
          name: "Ranjeet",
          money: 10000,
        },
        {
          id : 4,
          account_no: 222,
          name: "Rajesh",
          money:1201
        },
        {
          id : 5,
          account_no: 1211,
          name: "Madhur",
          money: 1001,
        },
        {
          id : 6,
          account_no: 224,
          name: "Ajeet",
          money:12002
        },
        {
          id : 7,
          account_no: 1222,
          name: "Satish",
          money: 1000,
        },
        {
          id : 8,
          account_no: 2322,
          name: "Badri",
          money:120000
        },
        {
          id : 9,
          account_no: 1222,
          name: "Deepak",
          money: 1000000,
        },
        {
          id : 10,
          account_no: 2244,
          name: "Krishna",
          money:12002
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