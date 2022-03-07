import React from 'react';
import { useNavigate } from "react-router-dom";
import "../CSS/Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../CONTEXT/StateProvider";
import {getBasketTotal} from "../CONTEXT/reducer"

const Subtotal = () => {
  const [{basket}, setDispatch] = useStateValue();
  const history = useNavigate();
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value)=>(
                <>
                {console.log("val is",value)}
                <p>Subtotal ({basket?.length} items):<strong>{value}</strong></p>
                <small className="subtotal__gift">
                    <input type="checkbox" />This order containes a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
        <button onClick={(e)=>{history("/payment")}}>Procced to checkout</button>
    </div>
  )
}

export default Subtotal