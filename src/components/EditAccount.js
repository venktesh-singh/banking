import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const EditAccount = (route) => {
  let navigate = useNavigate();
  const { id } = useParams();
  
  const { accounts, editAccount } = useContext(GlobalContext);
const[money, setMoney]=useState("")
  const [selectedUser, setSelectedUser] = useState({
    id: null,
    account_no : "",
    name: "",
    money:"",
  });

  const currentUserId = id;
  
  useEffect(() => {
    const accountId = currentUserId;
    const selectedUser = accounts.find(
      (currentAccountTraversal) => currentAccountTraversal.id === parseInt(accountId)
    );
    setSelectedUser(selectedUser);
    setMoney(parseInt(selectedUser.money))
  }, [currentUserId, accounts]);

  const onSubmit = (e) => {
    e.preventDefault();
    editAccount(selectedUser);
    navigate("/");
  };

  const handleOnChange = (userKey, newValue) =>
  setSelectedUser({ ...selectedUser, [userKey]: parseInt(newValue)+money});

  const handleOnChanges = (userKey, newValue) =>
  setSelectedUser({ ...selectedUser, [userKey]: money -parseInt(newValue)});

  if (!selectedUser || !selectedUser.id) {
    return <div>Invalid Account No.</div>;
  }
  return (
    <>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
        <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Account Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.account_no}
              onChange={(e) => handleOnChange("account_no", e.target.value)}
              type="text"
              placeholder="Enter Account Number"
              disabled
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of Account Holder
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.name}
              onChange={(e) => handleOnChange("name", e.target.value)}
              type="text"
              placeholder="Enter name"
              disabled
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"htmlFor="money">
              Money
            </label> 
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              onChange={(e) => handleOnChange("money", e.target.value)}
              type="number"
              placeholder="Enter Money"
            />
          </div>
          <div className="flex items-center justify-between">
            <button  className="btn btn-success block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-3 rounded focus:text-gray-600 focus:shadow-outline" >Diposit</button>
          </div>
          
        </form>
        <form onSubmit={onSubmit}>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"htmlFor="money">
              Money
            </label> 
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              onChange={(e) => handleOnChanges("money", e.target.value)}
              type="number"
              placeholder="Enter Money"
            />
          </div>
          <div className="flex items-center justify-between">
            <button  className="btn btn-success block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-3 rounded focus:text-gray-600 focus:shadow-outline" >Withdraw</button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </>
  );
};

