
import { IMG_URL } from "../config";


const FoodItemCard = ({ name, description, price, cloudinaryImageId }) => {
  console.log('test test', cloudinaryImageId)
     return (
       <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
         <img src={IMG_URL + cloudinaryImageId} />
         <h2 className="font-bold text-2xl">{name}</h2>
         <h3>{description}</h3>
         <h4>{price / 100} Rs</h4>
       </div>
     )
   }
 
 export default FoodItemCard;
   