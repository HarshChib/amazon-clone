import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import {useHistory} from "react-router-dom";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history=useHistory()
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): 
              <small>₹ </small>
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={
          getBasketTotal(basket)
        } // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={(e)=>history.push('/payment')}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;