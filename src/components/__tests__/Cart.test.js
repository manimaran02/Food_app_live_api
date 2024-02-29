import Cart from "../Cart";
import {fireEvent, render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../Mockdata/RestaurantMenu.json";
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../Header";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should load the restaurant menu components accordion",async ()=>{

    await act(async () => {
        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <RestaurantMenu/>
            </Provider>
            </BrowserRouter>
            )
    })


    const accordionName = screen.getByText("Ramadan Special")

    expect(accordionName).toBeInTheDocument();

})


it("Should show the accordion food items",async ()=>{

    await act(async ()=>{
   
        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <RestaurantMenu/>
            </Provider>
            </BrowserRouter>
        )

    })

    const accordionName = screen.getByText("Ramadan Special")

    fireEvent.click(accordionName);

    const fooditems = screen.getAllByTestId("fooditems")

    expect(fooditems.length).toBe(5)
    

})

it("Should have functionality of Add +",async ()=>{

    await act(async ()=>{
   
        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <RestaurantMenu/>
            <Header/>
            </Provider>
            </BrowserRouter>
        )

    })

    const accordionName = screen.getByText("Ramadan Special")

    fireEvent.click(accordionName);

    const addBtn = screen.getAllByRole("button",{name:"Add +"})

    expect(addBtn.length).toBe(5)

    fireEvent.click(addBtn[0]);

    const cartHeader = screen.getByText("Cart - (1)")

    expect(cartHeader).toBeInTheDocument();


})


it("Should have update in Cart page",async ()=>{

    await act(async ()=>{
   
        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <RestaurantMenu/>
            <Header/>
            <Cart/>
            </Provider>
            </BrowserRouter>
        )

    })

    const accordionName = screen.getByText("Ramadan Special")

    fireEvent.click(accordionName);

    const addBtn = screen.getAllByRole("button",{name:"Add +"})
    
    fireEvent.click(addBtn[1]);

   

    const fooditems = screen.getAllByTestId("fooditems")

    expect(fooditems.length).toBe(7);


   

  

})


it("Should have check the clear cart button in Cart page",async ()=>{

    await act(async ()=>{
   
        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <RestaurantMenu/>
            <Header/>
            <Cart/>
            </Provider>
            </BrowserRouter>
        )

    })


    
   const cartBtn = screen.getByRole("button",{name : "ClearCart"})

    fireEvent.click(cartBtn)

   expect(screen.getByText("Your cart is empty Add items")).toBeInTheDocument();
   





})


