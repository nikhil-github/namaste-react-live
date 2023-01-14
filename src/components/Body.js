import { restroList } from "../config";
import RestroCard from "./Restro";
import { useState } from "react";

// what is state
// what is a hook - just another function
// what is usestate

function filterData(searchText, restros) {
    console.log(restros)
    return restroList.filter( (restro) => restro.name.includes(searchText));
}


const Body = () => {
  const [ restros, setRestros ] = useState(restroList)
  // searchText is a local state variable
  const [searchText, setSearchText] = useState(""); // returns variable name and the set function to update the variable

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
          return <RestroCard {...restro} />;
        })}
      </div>
    </>
  );
};

export default Body;
