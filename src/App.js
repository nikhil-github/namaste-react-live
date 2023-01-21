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

import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu";
import Profile from "./components/ProfileClass";



// React Component
// Functional - NEW 
// Class Based component - OLD

// Functional Component
// Name starts with capital letter - non mandatory but good practice
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )

}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children : [
      {
        path : "/about",
        element: <About />,
        children : [
          {
            path : "profile",
            element: <Profile />
          }
        ]
      },
      {
        path : "/contact",
        element: <Contact />,
      },
      {
        path : "/",
        element: <Body />,
      }
    ],
  },
  {
    path : "/restro/:id",
    element: <RestroMenu />,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
