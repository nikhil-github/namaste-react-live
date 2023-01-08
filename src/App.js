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
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

// React Component
// Functional - NEW 
// Class Based component - OLD

// Functional Component
// Name starts with capital letter - non mandatory but good practice


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
