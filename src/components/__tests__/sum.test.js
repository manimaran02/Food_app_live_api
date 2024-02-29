import { sum } from "../sum";


test("Sum function calculate sum of  two number",()=>{
    const result = sum(4,5)
    // Assertion
    expect(result).toBe(9);
});