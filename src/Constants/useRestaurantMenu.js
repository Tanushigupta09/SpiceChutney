import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState({});
  // fetch the data
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9194122&lng=77.46863780000001&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setresInfo({ ...json });
  };

  return resInfo;
};

export default useRestaurantMenu;
