import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const EditAccount = (route) => {
  let navigate = useNavigate();
  const { id } = useParams();
  
  const { accounts, editAccount } = useContext(GlobalContext);

  let [amountList, setAmountList] = useState();

  const [selectedUser, setSelectedUser] = useState({
    id: null,
    account_no : "",
    name: "",
    money: "",
  });
 
  useEffect(()=>{
    const user = selectedUser.money;
    setAmountList(user);
  },[])

  const currentUserId = id;
  
  useEffect(() => {
    const accountId = currentUserId;
    const selectedUser = accounts.find(
      (currentAccountTraversal) => currentAccountTraversal.id === parseInt(accountId)
    );
    setSelectedUser(selectedUser);
  }, [currentUserId, accounts]);

  const onSubmit = (e) => {
    e.preventDefault();
    editAccount(selectedUser);
    navigate("/");
  };

  const handleOnChange = (userKey, newValue) =>
    setSelectedUser({ ...selectedUser, [userKey]: newValue });

  if (!selectedUser || !selectedUser.id) {
    return <div>Invalid Account No.</div>;
  }

  const incrementAmount = (index) => {
    let newAmountList = [...amountList];
    newAmountList[index].quantity++;
    setAmountList(newAmountList);
  };

  const decrementAmount = (index) => {
    let newAmountList = [...amountList];
    newAmountList[index].quantity++;
    setAmountList(newAmountList);
  };

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
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="money"
            >
              Money
            </label> 
            <span>{parseInt(selectedUser.money)}</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={parseInt(selectedUser.money)}
              onChange={(e) => handleOnChange("money", e.target.value)}
              type="text"
              placeholder="Enter Money"
            />
          </div>
          <div className="flex items-center justify-between">
            <button onClick={incrementAmount} type="button" class="btn btn-success block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-3 rounded focus:text-gray-600 focus:shadow-outline">Deposit</button>&nbsp;
            <button onClick={decrementAmount} type="button" class="btn btn-success block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">Withdraw</button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </>
  );
};
