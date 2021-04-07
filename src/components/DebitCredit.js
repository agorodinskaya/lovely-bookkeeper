import React from "react";

const DebitCredit = () => {
  return (
    <div className='dt-ct-container'>
      <div>
        <h4>Debit</h4>
        <p className='txn plus'>00.0</p>
      </div>
      <div>
        <h4>Credit</h4>
        <p className='txn minus'>00.0</p>
      </div>
    </div>
  );
};

export default DebitCredit;
