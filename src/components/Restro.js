
import { IMG_URL } from "../config";


const RestroCard = ({ name, cusines, rating }) => {
    // const { name, cusines, rating } = restro
     return (
       <div className="card">
         <img src={IMG_URL} />
         <h2>{name}</h2>
         <h3>{cusines.join(", ")}</h3>
         <h4>{rating}</h4>
       </div>
     )
   }
 
 export default RestroCard;
   