import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import Body from "./src/Components/Body";
import Header from "./src/Components/Header";
import AboutUs from "./src/Components/AboutUs";
import ContactUs from "./src/Components/ContactUs";
import Error from "./src/Components/Error";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import CartPage from "./src/Components/CartPage";
// import RestaruntMenu from "./src/Components/RestaruntMenu";
// import Grocery from "./src/Components/Grocery";
// import Example from "./src/Components/Example";

const Grocery = lazy(() => import("./src/Components/Grocery"));
const RestaruntMenu = lazy(() => import("./src/Components/RestaruntMenu"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    setUserName("Sasi Lagisetti");
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path:"/cart",
        element: <CartPage />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaraunts/:resId",
        element: (
          <Suspense>
            <RestaruntMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
