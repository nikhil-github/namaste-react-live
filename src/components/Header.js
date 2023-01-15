import { useState } from "react";

const isLoggedIn = () => {
  return true;
}


const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      alt="logo"
    ></img>
  </a>
);


export const Header = () => {
  const [ isLoggedIn, setIsloggedIn ] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>

      {isLoggedIn ? (
        <button onClick={ () => setIsloggedIn(false)}>Logout</button>
      ) : (
        <button onClick={ () =>  setIsloggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;