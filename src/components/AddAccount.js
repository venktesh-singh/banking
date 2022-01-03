import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const AddAccount = () => {
  let navigate = useNavigate();

  const { addAccount, accounts } = useContext(GlobalContext);

  const [account_no, setAccountNumber] = useState("");
  const [name, setName] = useState("");
  const [money, setMoney] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newAccount = {
      id: accounts.length + 1,
      account_no,
      name,
      money,
    };
    addAccount(newAccount);
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
        <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name">
              Account Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={account_no}
              onChange={(e) => setAccountNumber(e.target.value)}
              type="text"
              placeholder="Enter Account Number"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of Account
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="money"
            >
              Money
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={money}
              onChange={(e) => setMoney(e.target.value)}
              type="text"
              placeholder="Enter money"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Account
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};