import {fireEvent , render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"

import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";



it("should have login Button",()=>{
    
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument();

})


it("should have cart item is 0",()=>{
    
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    const cart = screen.getByText("Cart - (0)")
    expect(cart).toBeInTheDocument();

})

it("should change login button to login onclick",()=>{
    
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )

    

    fireEvent.click(screen.getByRole("button",{name : "Login"}))
    
    const logout  =  screen.getByRole("button",{name : "LogOut"})


    expect(logout).toBeInTheDocument();

})