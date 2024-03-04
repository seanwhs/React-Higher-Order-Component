import React from "react";
import UpdatedComponent from './HOC';


//Person1.js
function Person1({amount, increaseBid}) {
 
  return (
    <div>
      <h1>Jimmy Bids ${amount}.</h1>
      <button onClick={increaseBid} className="btn btn-primary">
        Increase
      </button>
    </div>
  );
}

export default UpdatedComponent(Person1);