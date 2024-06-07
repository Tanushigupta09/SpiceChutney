import ResBanList from "../Utils/ResBanList";

import RestaurantCard from "./RestaurantCard";
import ResBanner from "./ResBanner";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { withPromotedLabel } from "./RestaurantCard";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);

  const [filteredres, setfilteredres] = useState([]);

  const [inputValue, setinputValue] = useState("");

  function handleChange(e) {
    setinputValue(e.target.value);
  }

  console.log(listofRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      console.log(json);
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      const resData = await checkJsonData(json);
      setlistofRestaurants(resData);
      setfilteredres(resData);
    } catch (error) {
      console.log(error);
    }
  };

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex-col" style={{ backgroundColor: "white" }}>
        <div
          className="flex-col text-white mb-4"
          style={{ backgroundColor: "white" }}
        >
          <h1
            className="text-3xl mx-2 font-semibold p-4 "
            style={{ color: "black" }}
          >
            What's on your mind?
          </h1>
          <div className="flex bg-black hover:cursor-pointer mt-6 ml-4">
            {ResBanList.map((banner) => (
              <ResBanner
                resban={banner}
                key={banner.info1.id}
                className="w-auto"
              />
            ))}
          </div>
        </div>
        <div className="flex-col mt-8">
          <h2
            className="font-bold sm:ml-6 sm:text-center sm:text-[45px]"
            style={{ color: "#FB8B24" }}
          >
            Top Restaurant's in Banglore
          </h2>
          <div className="justify-center mt-14">
            <div className="flex justify-center ">
              <button
                className="text-white p-2 ml-14 rounded-lg justify-center sm:ml-4"
                style={{ backgroundColor: "#750E21" }}
                type="btn"
                onClick={() => {
                  const filteredlist = listofRestaurants.filter(
                    (res) => res.info.avgRating > 4.5
                  );
                  console.log("fil", filteredlist);
                  setlistofRestaurants([...filteredlist]);
                }}
              >
                Top Rated
              </button>
              <input
                type="search"
                value={inputValue}
                onChange={handleChange}
                className="border-2 border-black p-2 w-72 rounded-lg sm:ml-[10px] md:ml-[85px]"
              ></input>
              <button
                className=" p-3 bg-orange-500 rounded-lg text-white ml-4"
                onClick={() => {
                  console.log(inputValue);
                  const filterres = listofRestaurants.filter((res) =>
                    res?.info?.name
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                  );
                  setfilteredres(filterres);
                }}
              >
                Search
              </button>
            </div>
          </div>
          <div className="res-container-cards flex flex-wrap ">
            {filteredres.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                className="res3"
                to={"/restaurants/" + restaurant.info.id}
              >
                {/* If the restaurant is promoted then add a promoted laber to it by using higher order component */}
                {restaurant.info.promoted || restaurant.info.veg ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard
                    resData={restaurant}
                    className="grid-flow-row grid-rows-3 sm:grid-flow-col md:grid-rows-3"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
