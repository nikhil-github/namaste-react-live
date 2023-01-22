import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../config";
import useRestro from "../utils/useRestros";
import Shimmer from "./Shimmer";


const RestroMenu = () => {
  // how to read a dynamic URL params  
  const params = useParams();
  const { id } = params

  const restro = useRestro(id)

  if(!restro) {
    return <Shimmer />
  }

  return (
    <div className="menu">
        <div>
            <h1>Restro id: {id}</h1>
            <h2>{restro.name}</h2>
            <img src={IMG_URL + restro.cloudinaryImageId} />
            <h3>{restro.area}</h3>
            <h3>{restro.city}</h3>
            <h3>{restro.avgRating}</h3>
        </div>
        <div>
            <h1>Menu</h1>
            <ul>
                {
                    Object?.values(restro?.menu?.items).map((item) => <li key={item.id}>{item.name} </li> )
                }
            </ul>
        </div>
    </div>
  )
}

export default RestroMenu;