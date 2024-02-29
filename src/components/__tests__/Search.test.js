import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_dATA from "../Mockdata/mock_api_data.json";

import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>{

    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_dATA)
        }
    })

})


it("Should have to Check the Search Button feature working Correctly", async ()=>{

    await act( async ()=>{
         render(
            <BrowserRouter>
            <Body />
            </BrowserRouter>
         )   

    })



    const resCardBeforeSearch = screen.getAllByTestId("resCard");

    expect(resCardBeforeSearch.length).toBe(9)

    const searchButton = screen.getByRole("button" ,{name: "Search"})

    const searchInput = screen.getByTestId("res-Input")

    

    fireEvent.change(searchInput, {target : {value : "pizza" }})

    fireEvent.click(searchButton)

    const resCardAfterSearch = screen.getAllByTestId("resCard")

    expect(resCardAfterSearch.length).toBe(2)

})


it("Should have Top-Rated-Button feature for The Sorted resCard" ,async ()=>{
 
   await act(async ()=>{

    render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
        )


    })
   

    const topRatedBeforeClick = screen.getAllByTestId("resCard")
    expect(topRatedBeforeClick.length).toBe(9);

    const topRatedButton = screen.getByRole("button" ,{name : "Top-rated Restaurant"})

    fireEvent.click(topRatedButton)

    
    const topRatedAfterClick = screen.getAllByTestId("resCard")
    // console.log(topRatedAfterClick)
    // console.log(topRatedAfterClick.length)

  expect(topRatedAfterClick.length).toBe(6)

})