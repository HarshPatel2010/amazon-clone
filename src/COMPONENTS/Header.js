import React from 'react';
import "../CSS/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <div className='header'>
        {/* amazon logo */}
        <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />

        {/* searchBox */}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon"/>
        </div>

        <div className="header__nav">
            <div className="header__items">
                <span className="header__items_lineOne">
                    Hello world!
                </span>
                <span className="header__items_lineTwo">
                    sign In
                </span>
            </div>
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
            <div className="header__items_Basket">
                <ShoppingBasketIcon />
                <span className="header__items_lineTwo header__items_BasketCount">0</span>
            </div>
           
        </div>
    </div>
   
    
  )
}

export default Header