import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("Checking the form contact is rendering",()=>{
    render(<Contact/>)

    const result = screen.getByRole("heading")
    expect(result).toBeInTheDocument();
    
})


test("Checking the form contact is textarea",()=>{
    render(<Contact/>)

    const text = screen.getByRole("textarea")
    
    expect(text).toBeInTheDocument();
    
})