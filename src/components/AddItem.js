import React from "react";

const AddItem = () => {
  return (
    <div>
      <h3>Add new item:</h3>
      <form action=''>
        <div className='form-control'>
          <label htmlFor='text'>transaction</label>
          <input type='text' id='text' placeholder='transaction name' />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>amount</label>
          <input type='number' id='amount' placeholder='amount' />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default AddItem;
