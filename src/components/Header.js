import React from "react";
import Balance from "./Balance";
const Header = () => {
  return (
    <>
      <h2>Lovely bookkeeper</h2>
      <hr />
      <div className='container'>
        <Balance />
      </div>
    </>
  );
};

export default Header;
