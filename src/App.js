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

import React, { Children, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestroMenuWrapper from "./components/RestroMenu";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux"
import Store from "./utils/store";
import Cart from "./components/Cart";

// React Component
// Functional - NEW
// Class Based component - OLD

// Dynamic Import
// Ondemand loading
// Lazy Loading
// Dynamic Bundling
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

// Functional Component
// Name starts with capital letter - non mandatory but good practice
const AppLayout = () => {
  const [user, setUser] = useState({
    name : "Nik",
    email: "email.com"
  });


  return (
    <Provider store={Store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (<Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>),
        children :[
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path : "/cart",
        element : <Cart />
      }
    ],
  },
  {
    path: "/restro/:id",
    element: <RestroMenuWrapper />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
