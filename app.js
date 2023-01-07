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

const title = (
  <h1 key="h1" id="title">
    Namaste React
  </h1>
)


// React Component
// Functional - NEW
// Class Based component - OLD

// Functional Component
// Name starts with capital letter - non mandatory but good practice

const HeaderComponent = () => {
  return (
    <div>
      {title      }
      <h1>Namaste React Functional Component</h1>
      <h2>This is an H2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
