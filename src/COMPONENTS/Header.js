import React from 'react';

import "../CSS/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from "../CONTEXT/StateProvider";
import {auth} from '../firebase'




const Header = () => {
    const [{basket,user}, setDispatch] = useStateValue();

//if someone clicked on signOut so that fuction signOut the credentials
const handleAuthetication = ()=>{
    if(user){
        auth.signOut()
        console.log("user has benn successfully signed out")
    }
}
  return (
    <div className='header'>
      
        {/* amazon logo */}
        <Link to= "/">
        <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
        

        {/* searchBox */}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon"/>
        </div>

        <div className="header__nav">

            {/* wrap in the login  */}
            <Link to={!user && "/login"}>
            <div onClick={handleAuthetication} className="header__items">
                <span className="header__items_lineOne">
                  {user ? `Welcome: ${user.email}` : "hello Guest"}
                </span>
                <span className="header__items_lineTwo">
                     {user ? "Sign Out": "Sign In" }
                </span>
            </div>
            </Link>
            <div className="header__items">
                <span className="header__items_lineOne">
                    Return
                </span>
                <span className="header__items_lineTwo">
                    & Orders
                </span>
            </div>
            <div className="header__items">
                <span className="header__items_lineOne">
                    Your
                </span>
                <span className="header__items_lineTwo">
                    Prime
                </span>
            </div>
           <Link to="/checkout">
           <div className="header__items_Basket">
                <ShoppingBasketIcon />
                <span className="header__items_lineTwo header__items_BasketCount">{basket?.length}</span>
            </div>
           </Link>
           
        </div>
    </div>
   
    
  )
}

export default Header