import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us Page Text Cases", () => {
  test("Weather the the Contact Component Render or not", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Weather the Button present in the page or not", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Weather the Random text exist or not", () => {
    render(<ContactUs />);

    const Random = screen.getByText("Contact Us");
    expect(Random).toBeInTheDocument();
  });
  // it ==== test or it alias test
  test("should placeholder text name present in or not", () => {
    render(<ContactUs />);
    const name = screen.getByPlaceholderText("Name");

    expect(name).toBeInTheDocument();
  });

  test("Weather The input Boxes are Presented or not",()=>{
    render(<ContactUs />);
    const input = screen.getAllByRole("textbox")

    expect(input.length).toBe(2);

  })
});
