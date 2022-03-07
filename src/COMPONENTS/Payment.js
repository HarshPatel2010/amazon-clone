import React, { useState, useEffect } from "react";
import "../CSS/Payment.css";
import { useStateValue } from "../CONTEXT/StateProvider";
import CheckoutProducts from "./CheckoutProducts";
import { Link, useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../CONTEXT/reducer";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { db } from "../firebase";
import axios from "../axios";
// import {  collection, query,doc  } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 


const Payment = () => {
  const history = useNavigate();
  const [{ basket, user }, setDispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    //listen for changes in the card element
    //display any eroor as customer type their card details
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((paymentIntent ) => {
        //"paymentIntent"(it means payment confirmation) has been  destructured from the responce;
        console.log("its done!!!!!!");
        // const q = query(collection(db, "users"));
       
          // db.collection("users").doc(user?.uid)
          // .collection("orders")
          // .doc(paymentIntent.id)
          // .set({
          //   basket: basket,
          //   amount: paymentIntent.amount,
          //   created: paymentIntent.created,
          // });

          //  setDoc(doc(db, "users", user?.uid), {
          //   basket: basket,
          //   amount: 67,
          //   created: paymentIntent.created,
          // });
          console.log("payment --------",paymentIntent)//FOR DEBUGING
        


        setSucceeded(true);
        setError(null);
        setProcessing(false);
        setDispatch({
          type: "EMPTY_BASKET",
        });
        history("/order");
      })
      .catch((error) => {
        console.log(error);
      });
  };

//useEffect as it will be fired when this component is rendered
  useEffect(() => {
    const getClientSecret = async () => {
      const res = await axios({
        method: "post",
        url: `/payment/create?totlal=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(res.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log("The SECRET is --t---", clientSecret);
  console.log("im user",user);
  

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user ? user.email : ""}</p>
            <p>123 react,Los angeles</p>
            <p>CA,USA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => {
              return (
                <CheckoutProducts
                  id={item.id}
                  key={Math.floor(Math.random() * 100000 + 1)}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3> Total Order: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
