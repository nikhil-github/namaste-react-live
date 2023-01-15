import { restroList } from "../config";
import RestroCard from "./Restro";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// what is state
// what is a hook - just another function
// what is usestate

function filterData(searchText, allRestros) {
  console.log(allRestros);
  return allRestros.filter((restro) => restro?.data?.name?.toLowerCase().includes(searchText.toLowerCase()));
}

const Body = () => {
  const [allRestros, setAllRestros] = useState([]);
  const [filteredRestros, setFilteredRestros] = useState([]);
  // searchText is a local state variable
  const [searchText, setSearchText] = useState(""); // returns variable name and the set function to update the variable

  // called after render with empty array
  // dep arr provided, then call useEffect evert time after render
  useEffect(() => {
    console.log("call this when dependency is changed");
    getRestros();
  }, []);

  async function getRestros() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9678217&lng=80.2185006&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // optional chanining
    setFilteredRestros(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestros(json?.data?.cards[2]?.data?.data?.cards);
  }

  // conditional rendering
  if (!allRestros) return null;

  return allRestros.length == 0 ? (
    <Shimmer />
  ) : (
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
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestros);
            setFilteredRestros(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restro-list">
        {/* {if (filteredRestros?.length == 0 ) {
          return <h1>No restos matching filter</h1>
        }
        } */}

        {filteredRestros.map((restro) => {
          //  console.log("nikhil testing ", restro.data)
          return <RestroCard {...restro.data} key={restro.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
