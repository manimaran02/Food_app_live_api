 import Card from "./Card";

import {useEffect, useState , useContext} from "react";
import useonlineStatus from "../utils/useonlineStatus";

import Shimmer from "./shimper";
import NotFound from "./notfound";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () =>
{
const [list_data,setList] = useState([]);
const [filterddata,setfilterddata] = useState([])
const [searchdata,setSearchdata] = useState("");

const {loggedInUser,setuserName} = useContext(UserContext)

useEffect(()=>{
  fetchData()
},[]);

const fetchData = async() => {

  const data1 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const data_json  = await data1.json()


  setList(data_json.data.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants)
  setfilterddata(data_json.data.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants)
 
};

const onlineStatus = useonlineStatus()
// console.log(data.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants)

 


if(list_data.length === 0){
    return  <Shimmer/>
}

if(onlineStatus === false){
  return  <NotFound/>
}

return (

    <div className="body">
      <div className="filtered">        
      <div className="search">
          <input  
          type="text" 
          data-testid = "res-Input"
          className="p-1 ml-4 border-2 border-gray-200 rounded-md" 
          value={searchdata}
          onChange={(e)=>{
            setSearchdata(e.target.value)

          }} />

          <button className="m-4 px-4 py-2 bg-green-100 rounded-md" onClick={()=>{
            
          const filtered_restaurant =  filterddata.filter( (res) => res.info.name.toLowerCase().includes(searchdata.toLowerCase()));
          
          if(filtered_restaurant.length  === 0){
            
           console.log("Not Found")
          }
          else{
            setList(filtered_restaurant)
            
          }

          }}>Search</button>
          

      <button className = "m-4 px-6 py-2 bg-yellow-100 rounded-md" 
     onClick = { () =>{
      const filterd_list  = filterddata.filter(
        (res) => res.info.avgRating >  4.1
      );
      
      setList(filterd_list);
      // console.log(filterd_list.length)
      // console.log(filterd_list)
     }}
          >Top-rated Restaurant</button>
<label>UserName : </label>
<input className="border border-gray-400 p-1 rounded-sm" value={loggedInUser} onChange={(e)=>{setuserName(e.target.value)}} />

 </div> 
</div>

       
        <div className="flex flex-wrap">
      {/* Config Driven Ui */}


            {
              list_data.map(restaurant => 
            
            <Link  key={restaurant?.info?.id} className="links" to = {"restaurant/" + restaurant?.info?.id}><Card   resData = {restaurant?.info} /></Link>)
            }
          
         </div>   

    </div>
)};


export default Body;