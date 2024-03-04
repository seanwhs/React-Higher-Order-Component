//HOC.js
import React, {useState} from "react";

function UpdatedComponent(OriginalComponent) {
  function NewComponent() {
    const [amount, setAmount] = useState(10);
    const increaseBid = () => {
      setAmount(amount * 2);
    };
    return <OriginalComponent increaseBid={increaseBid} amount={amount} />;
  }
  return NewComponent;
}

export default UpdatedComponent;
