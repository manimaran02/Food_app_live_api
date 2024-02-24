
import {useParams} from "react-router-dom"; 
import Shimmer from "./shimper";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";


const RestaurantMenu = () =>{
    
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId)

    const [showIndex,setshowIndex]  = useState(0)

    if(resInfo === null) return <Shimmer/>

   const {name,cuisines} = resInfo.cards[2]?.card?.card?.info;
    // console.log(resInfo)
  
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const ListCategory = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    // const ListCategory1 = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    // c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" )

    
    
     
        
       return (
            <div className="text-center ">
                <h1 className="font-extrabold">{name}</h1>
                <h2 className="font-bold">{cuisines.join(" ,")}</h2>
               
                {ListCategory.map((list_cat,index)=> ( 
                // Controlled component by RestaurantMenu
                   <ResCategory key={list_cat.card.card.title} 
                    data={list_cat?.card?.card}
                    
                    showItems={index === showIndex  ?  true  : false }

                    setshowIndex={() => setshowIndex(index)}
                    />

                
                ))}
               

            </div>
) 

    }
                             
    
    

 


export default RestaurantMenu;