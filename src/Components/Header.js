import React from "react";
import { useState } from "react";
import { logo_url } from "../Constants/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Constants/useOnlineStatus";

const Header = () => {
  const [signiN, setsigniN] = useState("SignIn");

  function handleSign() {
    if (signiN === "SignIn") {
      setsigniN("SignOut");
    } else {
      setsigniN("SignIn");
    }
  }

  const onlinestatus = useOnlineStatus();
  return (
    <div
      className="flex justify-between  "
      style={{ backgroundColor: "white" }}
    >
      <div className="w-44 ">
        <Link to="/">
          <img className="logo sm:w-14 mt-6 ml-4 md:w-10" src={logo_url} />
        </Link>
      </div>
      <div className="navbar_links">
        <ul className="flex p-4 mt-4" style={{ color: "#FB8B24" }}>
          <li className="mr-5">
            Status: {onlinestatus ? "online" : "offline"}
          </li>
          <li className="mr-5">
            <i className="fa fa-percent" aria-hidden="true"></i>
            <Link to="/grocery" className="grocery ml-2">
              Grocery
            </Link>
          </li>
          <li className="mr-5">
            <i className="fa fa-question-circle" aria-hidden="true"></i>
            <Link to="/contact" className="help  ml-2">
              Help
            </Link>
          </li>
          <li className="mr-5">
            <i className="fa fa-user" aria-hidden="true"></i>
            <button className="signin ml-2" type="btn" onClick={handleSign}>
              {signiN}
            </button>
          </li>
          <li>
            <i className="fa fa-shopping-bag mr-2" aria-hidden="true"></i> Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
