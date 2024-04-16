import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useLocation from "../utils/UseLocation";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnvalue, setbtnvalue] = useState("LogIn");
  const [cityName, setCityName] = useState("Default City");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const location = useLocation();
  // console.log(location);
  useEffect(() => {
    if (location) {
      fetchData();
    }
  }, [location]);
  const fetchData = async () => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&appid=d85d43de70a781c4b2575c2d989679b9`
    );
    const json = await data.json();
    // console.log(json);
    setCityName(json.name);
  };
  return (
    <div className="flex flex-row items-center justify-between p-4 shadow-xl mb-4 w-full bg-white">
      <Link
        to="/"
        className="hover:rotate-[360deg] transition ease-in duration-1000"
      >
        <img
          className="w-14 rounded-full"
          src="https://image.similarpng.com/very-thumbnail/2021/07/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png"
        />
      </Link>
      <div className="nav-links">
        <ul className="flex flex-row items-center justify-between gap-4 ">
          <li className="hidden md:inline">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>{cityName.toUpperCase()}</li>
          <li className="hidden md:inline">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden md:inline">
            <Link to="/about">About</Link>
          </li>
          <li className="hidden md:inline">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hidden md:inline">
            <Link to="/grocery">Grocery</Link>
          </li>
          <Link to="/cart">
            <li className="hidden md:inline">
              Cart({cartItems.length + "Items"})
            </li>
          </Link>
          <button
            className="nav-btn bg-black text-white font-semibold px-4 py-2"
            onClick={() => {
              btnvalue === "LogIn"
                ? setbtnvalue("LogOut")
                : setbtnvalue("LogIn");
            }}
          >
            {btnvalue}
          </button>
          <li className="font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
