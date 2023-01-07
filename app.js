/**
 *
 * Parcel Bundler does
 *
 * Create Server for Dev
 * Hot Module Replacement (Hotreload)
 * File watcher
 * Bundling
 * Minify
 * Clean the code
 * Dev and Production Build
 * Super Fast Build Algorithm
 * Image optimization
 * Caching while development
 * Compression
 * Compatible with old version of browsers
 * HTTPs on dev
 * Configurable Port Number
 * Consistent hashing algorithm
 * Zero Config
 * Tree Shaking - Remove unwanted code
 *
 *
 * Transitive Dependencies
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <div>
    <h2>Food Villa</h2>
    <img className="logo" srv="" alt="" ></img>
  </div>
)


// React Component
// Functional - NEW
// Class Based component - OLD

// Functional Component
// Name starts with capital letter - non mandatory but good practice

const Header = () => {
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
    </div>
  );
};

const burgerKing = {
  name : "Burger King",
  image: "https://cdn.freebiesupply.com/images/large/2x/burger-king-logo-png-transparent.png",
  cusines: ["Burger", "American"],
  rating: "4.2"
}

const restroList = [
  {
    name : "Burger King",
    image: "https://cdn.freebiesupply.com/images/large/2x/burger-king-logo-png-transparent.png",
    cusines: ["Burger", "American"],
    rating: "4.2"
  },
  {
    name : "Burger King0",
    image: "https://cdn.freebiesupply.com/images/large/2x/burger-king-logo-png-transparent.png",
    cusines: ["Burger", "American"],
    rating: "4.2"
  },  {
    name : "Burger King1",
    image: "https://cdn.freebiesupply.com/images/large/2x/burger-king-logo-png-transparent.png",
    cusines: ["Burger", "American"],
    rating: "4.2"
  },  {
    name : "Burger King2",
    image: "https://cdn.freebiesupply.com/images/large/2x/burger-king-logo-png-transparent.png",
    cusines: ["Burger", "American"],
    rating: "4.2"
  },  {
    name : "Burger King3",
    image: "https://cdn.freebiesupply.com/images/large/2x/burger-king-logo-png-transparent.png",
    cusines: ["Burger", "American"],
    rating: "4.2"
  },  {
    name : "Burger King4",
    image: "https://cdn.freebiesupply.com/images/large/2x/burger-king-logo-png-transparent.png",
    cusines: ["Burger", "American"],
    rating: "4.2"
  },

]

const RestroCard = ({ name, cusines, rating }) => {
 // const { name, cusines, rating } = restro
  return (
    <div className="card">
      <img src={burgerKing.image} />
      <h2>{name}</h2>
      <h3>{cusines.join(", ")}</h3>
      <h4>{rating}</h4>
    </div>
  )

}

// props - properties
const Body = () => {
  return (
    <div className="restro-list">
      {
          restroList.map((restro) => {
             return  <RestroCard {...restro} />
          })
      }
    </div>
  )
}

const Footer = () => {
  return (
    <h4>Footer</h4>
  )
}


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )

}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
