import { render,screen } from "@testing-library/react";
import Card from "../Card";

import Mockdata from "../Mockdata/CardMockdata.json"
import "@testing-library/jest-dom";



it("Should Have the Card component",() => {
    
    render(<Card resData={Mockdata} />);
    
    const cardName = screen.getByText("Hanifa Restaurant");

    expect(cardName).toBeInTheDocument();

})