
import { IMG_URL } from "../config";


const RestroCard = ({ name, cuisines, lastMileTravelString, cloudinaryImageId }) => {
    // const { name, cusines, rating } = restro
    console.log("name ", name)
     return (
       <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
         <img src={IMG_URL + cloudinaryImageId} />
         <h2 className="font-bold text-2xl">{name}</h2>
         <h3>{cuisines.join(", ")}</h3>
         <h4>{lastMileTravelString}</h4>
       </div>
     )
   }
 
 export default RestroCard;
   