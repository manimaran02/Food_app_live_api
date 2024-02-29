import { useContext } from "react";
import { con_url } from "../utils/constant";
import UserContext from "../utils/UserContext";

//Destructing resData on fly (resData is a Props)
//              ^
//              !
const Card = ({resData}) => {
    
      
     
    // Destructring 
     const {cloudinaryImageId,name,cuisines,avgRating,sla} = resData
     const {loggedInUser} = useContext(UserContext)
    //  console.log(resData)
      return (
        <div data-testid = "resCard" className="m-4 p-4 h-96 w-52 bg-gray-200 rounded-md">
            <img alt = "res-card" className="w-44 mb-2 h-44 rounded-lg" src = {con_url + cloudinaryImageId}/> 
           
           <div>
            <h3 className="font-bold">{name}</h3>
            <h4 className="my-2">{cuisines.join(" ,")}</h4>
            <h4> {avgRating}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
            <h4>{loggedInUser}</h4>
        </div>
        </div>
    );
    };
 
    export default Card;