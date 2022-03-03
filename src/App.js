import "./App.css";
import { useEffect, } from "react";
import Header from "./COMPONENTS/Header";
import Home from "./COMPONENTS/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./COMPONENTS/Checkout";
import Login from "./COMPONENTS/Login";

import { auth } from "./firebase";
import {
  onAuthStateChanged,
  updateCurrentUser,
  UserCredential,
} from "firebase/auth";
import { useStateValue } from "./CONTEXT/StateProvider";

function App() {
  const [{user}, setDispatch] = useStateValue();
  

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     console.log("THE USER email IS", user.email);
  //     console.log("THE USER IS", user);
  //     if (user) {
  //       return () => {
  //         setDispatch({
  //           type: "SET_USER",
  //           user: user.email,
  //         });
         
  //       };
  //     } else {
  //       return () => {
  //         setDispatch({
  //           type: "SET_USER",
  //           user: null,
  //         });
        
  //       };
  //     }
  //   });
   
  // }, []);

  useEffect(async() => {
     await onAuthStateChanged(auth,user=>{
      if(user){
        console.log("registered",user)
        setDispatch({
                  type: "SET_USER",
                 user: user
                });
  
      }else{
        console.log("not registered")
        setDispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
   
  }, [])
  
  


  return (  
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
