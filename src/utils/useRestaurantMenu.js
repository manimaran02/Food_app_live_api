import { useEffect, useState } from "react";
import { menu_url } from "./constant";


const useRestaurantMenu = (resId)=>{
    
    const [resInfo,setResInfo] = useState(null);
    
    useEffect(()=>{

        fetchMenu()

    },[])

    const fetchMenu = async() =>{
        const data = await fetch(menu_url+resId)
        const json = await data.json()
        setResInfo(json.data)
    }

    return resInfo;

}

export default useRestaurantMenu;
