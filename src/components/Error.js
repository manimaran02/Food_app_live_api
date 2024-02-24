import { useRouteError } from "react-router-dom";


const Error = () =>{
    
        const err = useRouteError();
        
        console.log(err)
        console.log(err.status)
    
    
    return(
        <div>
            <h1>ooooops Something Went wrong !!!!!</h1>
            <h2>{err.statusText}</h2>
            <h2>{err.status}</h2>

            <h2>Return to Home Page</h2>
        </div>
    )
}

export default Error;