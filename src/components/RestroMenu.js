import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../config";
import { addItem } from "../utils/cartSlice";
import Store from "../utils/store";
import useRestro from "../utils/useRestros";
import Shimmer from "./Shimmer";
import { Provider } from "react-redux";

const RestroMenuWrapper = () => {
  return (
    <Provider store={Store}>
      {" "}
      // Set context
      <RestroMenu /> // Now App has access to context
    </Provider>
  );
};

const RestroMenu = () => {
  // how to read a dynamic URL params
  const params = useParams();
  const { id } = params;

  const restro = useRestro(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  if (!restro) {
    return <Shimmer />;
  }

  return (
    <div className="flex">
      <div>
        <h1>Restro id: {id}</h1>
        <h2>{restro.name}</h2>
        <img src={IMG_URL + restro.cloudinaryImageId} />
        <h3>{restro.area}</h3>
        <h3>{restro.city}</h3>
        <h3>{restro.avgRating}</h3>
      </div>
      <div className="p-5">
        <h1>Menu</h1>
        <ul>
          {Object?.values(restro?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name} -{" "}
              <button
                className="p-1 bg-green-50"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestroMenuWrapper;
