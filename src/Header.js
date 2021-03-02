import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from "./StateProvider";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { auth } from './firebase';


function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }


    return (
        <div className="header">
            <Link to="/">
            <img
                className="header__logo"
                src="https://s3.amazonaws.com/freebiesupply/large/2x/amazon-logo-white.png"
            />
            </Link>

            <div className="header__search">
                <input
                className="header__searchInput"
                type="text"/>
                <SearchIcon className="header__searchIcon"/>

            </div>

            <div className="header__nav">
                <Link to={!user && '/Login'}>
                    {/*user?.email || 'Guest' */}

                <div onClick={handleAuthentication} className="header__option">
                    <span
                        className="header__optionLineOne">
                        Hello {!user ? 'Guest' : user.email}
                    </span>
                    <span
                        className="header__optionLineTwo">
                        {user?'Sign Out' : 'Sign In'}
                         
                    </span>
                </div>

                </Link>

                <div className="header__option">
                    <span
                        className="header__optionLineOne">
                        Returns
                    </span>
                    <span
                        className="header__optionLineTwo">
                        & Orders
                    </span>
                    
                </div>

                <div className="header__option">
                    <span
                        className="header__optionLineOne">
                        Your
                    </span>
                    <span
                        className="header__optionLineTwo">
                        Prime
                    </span>
                </div>


                <Link to="/Checkout">
                <div className="header__optionBasket">
                    <ShoppingCartIcon />
                    <span className="header__Basketcount">{basket?.length}</span>  
                </div>
                </Link>

            </div>
        
            
        </div>

    );
}

export default Header ;
