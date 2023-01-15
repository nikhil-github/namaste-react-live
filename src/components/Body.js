import { restroList } from "../config";
import RestroCard from "./Restro";
import { useState, useEffect } from "react";

// what is state
// what is a hook - just another function
// what is usestate

function filterData(searchText, restros) {
    console.log(restros)
    return restroList.filter( (restro) => restros.name.includes(searchText));
}


const Body = () => {
  const [ restros, setRestros ] = useState(restroList)
  // searchText is a local state variable
  const [searchText, setSearchText] = useState(""); // returns variable name and the set function to update the variable

  // called after render with empty array
  // dep arr provided, then call useEffect evert time after render
  useEffect(() => {
    console.log("call this when dependency is changed")
    getRestros()
  }, []);

  async function getRestros() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9678217&lng=80.2185006&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(json)
    // optional chanining
    console.log("data from swiggy", json?.data?.cards[2]?.data?.data?.cards)
    setRestros(json?.data?.cards[2]?.data?.data?.cards)
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn" onClick={() => {
               console.log(restros)
               const data = filterData(searchText, restros);
               setRestros(data)
            }
         }>
          Search
        </button>
      </div>

      <div className="restro-list">
        {restros.map((restro) => {
        //  console.log("nikhil testing ", restro.data)
          return <RestroCard {...restro.data} key={restro.data.id}/>;
        })}
      </div>
    </>
  );
};

export default Body;
