import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, amount) => acc + amount, 0).toFixed(2);
  const sign = total > 0 ? "+" : "-";
  return (
    <>
      <h3>Balance :</h3>
      <h1 className={total > 0 ? "plus" : "minus"}>
        {sign}${total}
      </h1>
    </>
  );
};
export default Balance;
