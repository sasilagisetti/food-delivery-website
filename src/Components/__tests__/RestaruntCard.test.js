import { render, screen } from "@testing-library/react"
import RestaruntCard from "../RestaruntCard"
// import RestaruntCardDiccount from "../Body"
import MOCK_DATA from "../mocks/rescardmock.json"
import "@testing-library/jest-dom"

describe("Should Restarunt card Componet Render Or Not",()=>{
    it("should render Restarunt card Componet Render",()=>{
        render(
            <RestaruntCard resData={MOCK_DATA}/>
        )

        const name = screen.getByText("Uma Parlour - Pure Veg")

        expect(name).toBeInTheDocument()
    })

    // it("should render Restarunt card Componet with Extra Discount Render",()=>{
    //     render(
    //         <RestaruntCardDiccount />
    //     )
    // })
})