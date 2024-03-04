//Person2.js
import React from "react";
import UpdatedComponent from './HOC';

function Person2({amount, increaseBid}) {
 
  return (
    <div>
      <h1>Solomon Bids ${amount}.</h1>
      <button onClick={increaseBid} className="btn btn-primary">
        Increase
      </button>
    </div>
  );
}

export default UpdatedComponent(Person2);