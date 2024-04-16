import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RestaruntCard, { withDiscount } from "./RestaruntCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import useLocation from "../utils/UseLocation";

const Body = () => {
  const [newData, setNewData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filtervar, setFilterVar] = useState([]);

  const { loggedInUser, setUserName } = useContext(UserContext);
  // console.log("Body")

  // location CustomHook

  const RestaruntCardDiccount = withDiscount(RestaruntCard);
  useEffect(() => {
    fetchData();
    // console.log(newData)
  }, []);
  const fetchData = async () => {
    let apidata = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7165512&lng=83.14679249999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    let convertData = await apidata.json();
    setNewData(
      convertData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterVar(
      convertData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    // setNewData(convertData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // console.log(convertData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[1].info.aggregatedDiscountInfoV3)
  };
  const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus)
  if (onlineStatus === false)
    return (
      <div style={{ marginTop: "20px" }}>
        <h3>You're Offline Please Check Your Internet Connection</h3>
      </div>
    );
  return newData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body px-6 py-2">
      <div className="filter flex flex-row align-middle justify-center mb-6 flex-wrap gap-x-8">
        <div className="search flex flex-row bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-full">
          <input
            type="text"
            placeholder="Search...."
            className="search-box rounded-s-full outline-none border-none pl-3"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn px-4 py-1 rounded-e-full text-white bg-black font-semibold flex align-middle justify-center"
            onClick={() => {
              // console.log(searchText)
              const updatedList = filtervar.filter((data) =>
                data.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(updatedList)
              setNewData(updatedList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn border-2 py-2 px-4 font-semibold bg-black text-white"
          onClick={() => {
            let newVar = newData.filter(
              (newData) => newData.info.avgRating > 4.3
            );
            setNewData(newVar);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn filter-btn border-2 py-2 px-4 font-semibold bg-black text-white"
          onClick={() => {
            setNewData(filtervar);
          }}
        >
          Intial Restaurants
        </button>
        <div className="search flex flex-row bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-full">
          <input
            type="text"
            className="search-box rounded-full outline-none border-none pl-3"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-row flex-wrap px-24 py-2 my-12 items-center justify-center gap-3">
        {newData.map((resData) => (
          <Link key={resData.info.id} to={`restaraunts/${resData.info.id}`}>
            {resData.info.aggregatedDiscountInfoV3 === undefined ? (
              <RestaruntCard resData={resData} />
            ) : (
              <RestaruntCardDiccount resData={resData} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
