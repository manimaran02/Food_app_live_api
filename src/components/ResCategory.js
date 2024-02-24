import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({data,showItems,setshowIndex})=>{

// data.itemCards ? console.log("itemcard") : console.log("categories")

// const [showItems,setshowItems] = useState(show)
const handleClick = () =>{
    setshowIndex()
    
};

    return (
        <div> 
        <div className="w-6/12 mx-auto p-4 my-6 bg-gray-100 shadow-lg ">
           
           <div className=" flex justify-between font-bold text-md cursor-pointer" onClick={handleClick}>
            {/* <span>{data.title} ({data.itemCards ? data.itemCards.length : data.categories.length}) </span> */}
            
            <span>{data.title}</span>
            <span>🔽</span>
           
               </div>
             {showItems && <ItemList items ={data.itemCards}/>}
        </div>
        </div>
        

    )
}


export default RestaurantCategory;