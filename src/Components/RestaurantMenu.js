import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Constants/useRestaurantMenu";
import { menu_img_URl } from "../Constants/Constant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  return (
    <div className="bg-white">
      <div className="flex-col   bg-white text-black sm:mx-0 md:mx-24 lg:mx-96">
        <div className="flex justify-between shadow shadow-white  border-2 border-yellow-400 w-auto sm:w-[650px]">
          <div className="res1  border-2   w-[520px] sm:w-[650px]">
            <h2
              className="font-bold font-serif text-2xl text-center  "
              style={{ color: "#E8751A" }}
            >
              {resInfo?.data?.cards?.map((showtext) => {
                return <>{showtext?.card?.card?.info?.name}</>;
              })}
            </h2>
            <h4
              className="font-semibold text-center mx-auto my-2 "
              style={{ color: "#898121" }}
            >
              {resInfo?.data?.cards?.map((showcuisines) => {
                return (
                  <>{showcuisines?.card?.card?.info?.cuisines.join(" , ")}</>
                );
              })}
            </h4>
            <h5
              className="font-semibold text-center my-2"
              style={{ color: "#898121" }}
            >
              {resInfo?.data?.cards?.map((showcuisines) => {
                return (
                  <>
                    {showcuisines?.card?.card?.info?.areaName}
                    {"  "}
                    {showcuisines?.card?.card?.info?.sla?.lastMileTravelString}
                  </>
                );
              })}
            </h5>
          </div>
          <div className="res2 border-2 border-white">
            <div className="res_avgRating ">
              <div className="res_StarRating flex flex-row my-4 mx-4 w-44 ">
                <i
                  className="fa-solid fa-star ml-12 mt-2"
                  style={{
                    color: " #12b525",
                  }}
                ></i>
                <h5 className="text-center ml-4 mt-1">
                  {resInfo?.data?.cards?.map((showtotalRating) => {
                    return <>{showtotalRating?.card?.card?.info?.avgRating}</>;
                  })}
                </h5>
              </div>

              <div className="res_totalRating">
                <h5>
                  {resInfo?.data?.cards?.map((showtotalRating) => {
                    return (
                      <p
                        className="text-center"
                        key={showtotalRating?.card?.card?.info?.id}
                      >
                        {showtotalRating?.card?.card?.info?.totalRatingsString}
                      </p>
                    );
                  })}
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="res_dotted" /> */}

        {/* <div className="res_offers">
          <div className="res_offer1"></div>
          <div className="res_offer2"></div>
          <div className="res_offer3"></div>
          <div className="res_offer4"></div>
        </div> */}

        <div className="regular w-46  shadow-lg  shadow-white sm:w-[650px]">
          {resInfo?.data?.cards?.map((item) => (
            <>
              {item?.groupedCard && (
                <>
                  {item?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                    (cardItem) => {
                      return (
                        <div className="w-46 mx-auto sm:w-[650px]">
                          <h3 className="title font-bold text-2xl text-lime-500 mt-4 text-center">
                            {cardItem?.card?.card?.title}
                          </h3>
                          {cardItem?.card?.card?.itemCards?.map((show) => {
                            return (
                              <div className="res_menu flex mx-auto sm:w-[650px] ">
                                <div className="res_menu_des mt-5 w-96 h-50 mx-auto sm:mx-46">
                                  <p
                                    className="name text-center mt-5 font-bold"
                                    style={{ color: "black" }}
                                  >
                                    {show?.card?.info?.name}
                                    {"  "}
                                    {" RS."}
                                    {show?.card?.info?.price / 100 ||
                                      show?.card?.info?.defaultPrice / 100}
                                  </p>

                                  <p
                                    className="description text-center mt-6 "
                                    style={{ color: "black" }}
                                  >
                                    {show?.card?.info?.description}
                                  </p>
                                </div>
                                <div className="res_menu_img mt-5 w-85 mx-auto  sm:w-[450px]">
                                  {show?.card?.info?.imageId &&
                                    show?.card?.info?.id &&
                                    menu_img_URl && (
                                      <img
                                        className="w-80 h-25 m-6 rounded-lg shadow-slate-200 shadow-lg mx-auto sm:w-[300px] h-[220px]"
                                        src={
                                          menu_img_URl +
                                          (show?.card?.info?.imageId ||
                                            show?.card?.info?.id)
                                        }
                                      />
                                    )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    }
                  )}
                </>
              )}
            </>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
