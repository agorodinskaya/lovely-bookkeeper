import React from "react";
import Item from "./TransactionItem";
const Transactions = () => {
  return (
    <div>
      <h3>transactions of the month</h3>
      <ul>
        <Item />
      </ul>
    </div>
  );
};

export default Transactions;
