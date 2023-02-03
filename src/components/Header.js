import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";

const isLoggedIn = () => {
  return true;
};

// SPA - Single Page Application
// Client Side and Server Side routing

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" src={Logo} alt="logo"></img>
  </a>
);

export const Header = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10"> 
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">

            <Link to="/instamart">Instamart</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>

      {isLoggedIn ? (
        <button onClick={() => setIsloggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsloggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
