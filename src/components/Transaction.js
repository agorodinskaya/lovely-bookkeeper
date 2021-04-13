import React, { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalContext";
const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
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
        <button
          className='delete-btn'
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          <FaRegTrashAlt />
        </button>
      </li>
    </div>
  );
};

export default Transaction;
