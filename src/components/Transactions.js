import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalContext";
const Transactions = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>transactions of the month</h3>
      <ul className='list'>
        {transactions.map((transaction) => (
          <li className='txn minus' key={transaction.id}>
            {transaction.text} <span>{transaction.amount}</span>
            <button className='delete-btn'>o</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
