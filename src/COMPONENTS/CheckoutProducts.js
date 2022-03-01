import React from "react";
import "../CSS/CheckoutProduct.css";
import { useStateValue } from "../CONTEXT/StateProvider";


const CheckoutProducts = (props) => {
  const { id, image, title, price, rating } = props;
  const [{basket}, setDispatch] = useStateValue();


  const removeFromBasket=()=>{
    setDispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
      
    })
    
  }

  return (
    <div className="checkoutproducts">
      <img src={image} alt="" className="checkoutproducts__image" />
      <div className="checkoutproducts__info">
        <p className="checkoutproducts__title">{title}</p>
        <p className="checkoutproducts__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproducts__rating">
       
          {Array(rating)
            .fill()
            .map(() => {
              return <p key={((Math.random() * 100000) + 1)}> 🌟</p>;
            })} 
        </div>
        <button onClick={removeFromBasket}  className="checkoutproducts__button">Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProducts;
