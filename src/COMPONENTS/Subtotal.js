import React from 'react';
import "../CSS/Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../CONTEXT/StateProvider";
import {getBasketTotal} from "../CONTEXT/reducer"

const Subtotal = () => {
  const [{basket}, setDispatch] = useStateValue();
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
        <button>Procced to checkout</button>
    </div>
  )
}

export default Subtotal