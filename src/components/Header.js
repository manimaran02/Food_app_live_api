import { logo_url } from "../utils/constant";
import { useState } from "react";
import {Link} from "react-router-dom";
import useonlineStatus from "../utils/useonlineStatus";

import UserContext from "../utils/UserContext";

import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
const [btn_log,setlog] = useState("Login")

const onlineStatus = useonlineStatus()

const {loggedInUser} = useContext(UserContext)

const cartitems = useSelector((store)=> store.cart.items)


// console.log(cartitems)

return(
    <div className = "flex  bg-yellow-50 shadow-lg mb-2">
        <div className="logo-container">
            <img className="w-1/6" src= {logo_url} alt="logo"></img>
            
        </div>
        
    <div className="flex  items-center">
        <ul className="flex  justify-evenly  p-4 mr-4 absolute">

            <li className="px-2">Online :{onlineStatus ? "🟢" : "🔴"}</li>
            <li className="px-2">
                <Link className="links_a" to = "/">Home</Link>
                </li>
            <li className="px-2"><Link className="links_a" to = "/about">About Us</Link></li>
            <li className="px-2"><Link className="links_a" to = "/contact">Contact Us</Link></li>
            <li className="px-2"><Link className="links_a" to = "/grocery">Grocery</Link></li>
            <li className="px-2 font-bold text-xl"><Link className="links_a" data-testid = "cartBtn"  to = "/cart">Cart - ({cartitems.length})</Link></li>
            <button className="px-2" onClick={()=>
            {
               
                // if(btn_log === "Login"){
                //     setlog("LogOut")
                // }
                // else{
                //     setlog("Login")
                // }

                // {Or}


            // Ternary Operator is Used    
            btn_log === "Login" ? setlog("LogOut") : setlog("Login"); 
               
            }
            }>{btn_log}</button>
            <li className="font-bold" >{loggedInUser}</li>
        </ul>
    </div>
    </div>
);
};

export default Header;