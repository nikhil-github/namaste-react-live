
import { IMG_URL } from "../config";


const RestroCard = ({ name, cuisines, lastMileTravelString, cloudinaryImageId }) => {
    // const { name, cusines, rating } = restro
    console.log("name ", name)
     return (
       <div className="card">
         <img src={IMG_URL + cloudinaryImageId} />
         <h2>{name}</h2>
         <h3>{cuisines.join(", ")}</h3>
         <h4>{lastMileTravelString}</h4>
       </div>
     )
   }
 
 export default RestroCard;
   