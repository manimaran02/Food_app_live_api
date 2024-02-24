import User from "./User";
import UserClass from "../ClassComponents/UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

// const About = () =>{
//     return(
//         <div>
//             <h2>About Us</h2>
//            <User  name = {"Manimaran SDE (function component)"} work = {"SDE (function"} location ={"Chennai"} />
//            <UserClass  name = {"Manimaran SDE (class component)"} work = {"SDE (class)"} location ={"Chennai"}/>
//         </div>

//     )
// }

class About extends React.Component{
    constructor(){
        super()

        // console.log("Parent Constructor")
    }


    componentDidMount(){
        // console.log("Prent Componentb Did Mount")
    }

render(){
    // console.log("Parent render")
    return(
        <div>
            <h2>About Us</h2>
           <div>
            Login User :
            <UserContext.Consumer>
                {(data)=><h6>{data.loggedInUser}</h6>}
            </UserContext.Consumer>
           </div>
           
          
        </div>

    )

}


}




export default About;