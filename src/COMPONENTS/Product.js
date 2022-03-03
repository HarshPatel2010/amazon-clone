import React from "react";
import "../CSS/Product.css";
import { useStateValue } from "../CONTEXT/StateProvider";


const Product = (props) => {
  const {id, title, price, image, rating } = props;

  // state for the basket
  const [{basket}, setDispatch] = useStateValue();
  // console.log('this is the basket >>>',basket);
  
  const addToBasket = () => {
    //dispatch the item into the data layer
    setDispatch({  
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }});
     
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
       
        <p className="product__info">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p key={((Math.random() * 100000) + 1)}> 🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product image" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
