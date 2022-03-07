import "./App.css";
import { useEffect } from "react";
import Header from "./COMPONENTS/Header";
import Home from "./COMPONENTS/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./COMPONENTS/Checkout";
import Login from "./COMPONENTS/Login";
import Order from "./COMPONENTS/Order.js";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./CONTEXT/StateProvider";
import Payment from "./COMPONENTS/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  "pk_test_51KZxQqSCnaBtop68KWHEItBwhzDnZjCvNEE9K7gcPBeLWJJqspaDr6nBwab4kzSVUVHL3G88hT0tTxwltRhSXLfD00UelMQskv"
);

function App() {
  const [{ user }, setDispatch] = useStateValue();

  useEffect(async () => {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("registered", user);
        setDispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        console.log("not registered");
        setDispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
         
          <Route exact path="/payment" element={
              <>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          ></Route>
           <Route exact path="/order" element={<Order />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
