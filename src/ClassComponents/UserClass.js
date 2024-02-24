import React from "react";


class UserClass extends React.Component{

    constructor(props){
        super(props)
       
        this.state = {
            UserInfo : {
                name : "jdc",
                id : 1234,
                location : "India"
             

            }
        }


        //  console.log(this.props.name+"Child Constructor")
    }


async componentDidMount(){
   const data = await fetch("https://api.github.com/users/manimaran02");
   const json = await data.json()

   this.setState({
    UserInfo : json
   })


   console.log(this.props.name+" Mount")
}

componentDidUpdate(){
    console.log("Update Components")
}

render(){

    
const {name,id,location} = this.state.UserInfo

//  console.log(this.props.name+"Child render")

    return (
        
        <div className="user-block">
        <div className="user-cards">
            
            <h1>Name :{name}</h1>
            <h1>ID : {id}</h1>
            
            <h2>Location :{location}</h2>
            <h2></h2>
        </div>
    </div>
    
    );
};

};


export default UserClass