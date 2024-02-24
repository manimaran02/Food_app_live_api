import React,{Suspense, lazy, useState , useContext, useEffect} from "react";
import  ReactDOM  from "react-dom/client";
import Shimmer from "./components/shimper";
import Body from "./components/Body";
import Header from "./components/Header";

import {createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
// import Grocery from "./components/Grocery";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";

import { Provider } from "react-redux";
import Cart from "./components/Cart";

// Method 1

// const Card = (food) => (
//     <div className="res-card">
//         <img alt = "res-card" className="res-img" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cw13yba11vdsshxqoph5"/> 
//         <h3 className="res">{food.res_name}</h3>
//         <h4>{food.res_cuisine}</h4>
//         <h4> 4.7 Stars</h4>
//         <h4>38 Minutes</h4>
//     </div>
// )

// Method 2

// const Card = ({res_name,res_cuisine}) => (
//     <div className="res-card">
//         <img alt = "res-card" className="res-img" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cw13yba11vdsshxqoph5"/> 
//         <h3 className="res">{res_name}</h3>
//         <h4>{res_cuisine}</h4>
//         <h4> 4.7 Stars</h4>
//         <h4>38 Minutes</h4>
//     </div>
// )



const Grocery = lazy(()=>import("./components/Grocery"))





const Applayout = () => {


    const [userName,setuserName] = useState();

    useEffect(()=>{
        const data = {
            name : ""
        }
        setuserName(data.name);
    //  console.log(data.name)
    },[])
   

//    console.log(data.name)
    // console.log(userName)
    return (
        <Provider store ={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setuserName}}>
    <div className="app">
       <Header/>
       <Outlet/>

    </div>
    </UserContext.Provider>
    </Provider>
);
    };

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Applayout/>,
        errorElement : <Error/>,
        children :[
            
            {
                path: "/",
                element:<Body/>
            },
            {
                path:"/about",
                element : <About/>
            },
            {
                path:"/contact",
                element : <Contact/>
            },
            {
                path : "/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path : "/cart",
                element:  <Cart/>
            },
            {
                path:"/grocery",
                element : 
                <Suspense fallback={<Shimmer/>}>
                    <Grocery/>
                </Suspense>
                
            },  
              
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router = {appRouter} />)

