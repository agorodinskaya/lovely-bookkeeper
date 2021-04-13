import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
const DebitCredit = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const revenue = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const cost = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className='dt-ct-container'>
      <div>
        <h4>Revenue</h4>
        <p className='txn plus'>+${revenue}</p>
      </div>
      <div>
        <h4>Cost</h4>
        <p className='txn minus'>-${Math.abs(cost).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default DebitCredit;
