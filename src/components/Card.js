import { useContext } from "react";
import { con_url } from "../utils/constant";
import UserContext from "../utils/UserContext";

//Destructing resData on fly
//              ^
//              !
const Card = ({resData}) => {
    
      
      
    // Destructring 
     const {cloudinaryImageId,name,cuisines,avgRating,sla} = resData.info

     const {loggedInUser} = useContext(UserContext)
    
      return (
        <div className="m-4 p-4 h-96 w-52 bg-gray-200 rounded-md">
            <img alt = "res-card" className="w-44 mb-2 h-44 rounded-lg" src = {con_url + cloudinaryImageId}/> 
           
           <div>
            <h3 className="res">{name}</h3>
            <h4 >{cuisines.join(" ,")}</h4>
            <h4> {avgRating}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
            <h4>{loggedInUser}</h4>
        </div>
        </div>
    );
    };

    export default Card;