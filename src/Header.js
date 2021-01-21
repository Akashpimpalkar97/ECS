import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  const [{ basket, user }] = useStateValue();
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.indiabookstore.net/common/images/LogoShortSmall.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>
      <div className="header__Nav">
        <Link to={!user && "/login"} className="header__Link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Login In"}
            </span>
          </div>
        </Link>
      </div>
      <div className="header__Nav">
        <Link to="" className="header__Link">
          <div className="header__option">
            <span className="header__optionLineTwo"> More</span>
          </div>
        </Link>
      </div>
      <div className="header__Nav">
        <Link to="" className="header__Link">
          <div className="header__option">
            <span className="header__optionLineTwo">Cart</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout" className="header__Link">
        <div className="header__optionBasket">
          <AddShoppingCartIcon />
          <span className="header__optionLineTwo">{basket?.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
