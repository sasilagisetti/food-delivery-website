import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Should Header Component Render Or Not", () => {
  it("should button render in the Header Orn Not", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: "LogIn" });

    expect(button).toBeInTheDocument();
  });

  it("Should CartItems there or not", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart(0Items)");

    expect(cartItems).toBeInTheDocument();
  });

  it("Should Chnage LogIn Button to logout Button",()=>{
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    )

    const logInButton = screen.getByRole("button",{name:"LogIn"})

    fireEvent.click(logInButton);

    const logOutButton = screen.getByRole("button",{name:"LogOut"})

    expect(logOutButton).toBeInTheDocument();
  })
});
