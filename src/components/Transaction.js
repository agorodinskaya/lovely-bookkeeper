import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li
        className={transaction.amount < 0 ? "txn minus" : "txn plus"}
        key={transaction.id}
      >
        {transaction.text}{" "}
        <span>
          {sign} $ {Math.abs(transaction.amount)}
        </span>
        <button className='delete-btn'>
          <FaRegTrashAlt />
        </button>
      </li>
    </div>
  );
};

export default Transaction;
