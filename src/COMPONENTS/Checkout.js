import React from "react";
import "../CSS/Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../CONTEXT/StateProvider";
import CheckoutProducts from "./CheckoutProducts";
import "../CSS/CheckoutProduct.css";


const Checkout = () => {
  const [{basket}, setDispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon ad"
          className="checkout__ad" />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {/* basketitem */}
          {basket.map((item)=>{
           return <CheckoutProducts
                id={item.id}
                key={Math.floor((Math.random() * 100000) + 1)}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
            />
          })}
         
        </div>
      </div>
      <div className="checkout__right">
        {/* <h2>The subtotal will go here</h2> */}
        <Subtotal/>
       
      </div>
    </div>
  );
};

export default Checkout;
