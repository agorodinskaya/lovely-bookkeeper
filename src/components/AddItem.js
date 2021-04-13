import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
const AddItem = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div>
      <h3>Add new item:</h3>
      <form action='' onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>transaction</label>
          <input
            type='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='transaction name'
            className='input'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>amount</label>
          <input
            type='number'
            id='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className='input'
            placeholder='amount'
          />
        </div>
        <button className='btn'>submit</button>
      </form>
    </div>
  );
};

export default AddItem;
