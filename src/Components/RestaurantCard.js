import { img_url } from "../Constants/Constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className="res-card mx-6 p-4 w-[250px]  text-black my-2 hover:text-black hover:bg-orange-300 rounded ">
      <img
        src={img_url + cloudinaryImageId}
        className="w-[250px] h-[220px] my-2 rounded-md shadow-lg shadow-gray-300 hover:shadow-lg hover:shadow-gray-600 lg "
      />
      <h2 className="text-center text-lg font-bold py-2">{name}</h2>
      <h3 className="text-center text-lg font-medium">{cuisines.join(", ")}</h3>
      <h3 className="text-center text-lg font-medium">{costForTwo}</h3>
      <h3 className="text-center text-lg font-medium">
        <i
          className="fa-solid fa-star"
          style={{
            color: " #12b525",
            marginTop: "5px",
            marginLeft: "5px",
          }}
        ></i>
        <span className="rating">{avgRating} Star</span>
      </h3>
      <h3 className="text-center text-lg font-medium hidden text-black hover:text-white ">
        Quick View
      </h3>
    </div>
  );
};

// we will create a higher order component it will take up this rescard and enhance it by providing a promoting label to it

// input-restaurantcard => restaurantcard promoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-500 text-white ml-44 mt-6 rounded-md p-2 ">
          Promoted
        </label>

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
