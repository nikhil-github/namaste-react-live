/**
 * 
 * Parcel Bundler does
 * 
 * Hot Module Reload 
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
 * 
 * 
 * Transitive Dependencies
 * 
 */




import React from "react";
import ReactDOM from "react-dom/client";


const heading1 = React.createElement(
    "h1",
    { },
    "Heading 1"
  );

  const heading2 = React.createElement(
    "h2",
    { },
    "Heading 2"
  );

  const container = React.createElement(
    "div",
    { id : "container" },
    [heading1, heading2]
  );

  const root = ReactDOM.createRoot(document.getElementById("root"));
      
  root.render(container);