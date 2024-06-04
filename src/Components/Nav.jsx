import React, { useState } from "react";
import { useAuth } from "../Configuration/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";
import { FaTimes, FaBars } from "react-icons/fa";

const Nav = ({ setSearchBoxVisible, setSearchTerm }) => {
  const { currentUser, logout } = useAuth();

  const [nav, setNav] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    try {
      logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const showSearchBox = () => {
    setSearchBoxVisible(true);
  };

  return (
    <>
      <div className="flex justify-between items-center text-black px-14 py-4">
        <div className="flex items-center ">
          <img src="/logo.png" alt="" className="h-8" />
          <Link to="/">
            <h2 className="text-[25px]  ml-3">
              Movies<span className="italic font-bold">Now</span>
            </h2>
          </Link>
        </div>

        {currentUser ? (
          <div className="flex space-x-6">
            <p className="hidden md:flex text-xl">
              <span className=" font-semibold">Welcome,</span> User
            </p>

            <button
              onClick={showSearchBox}
              type="button"
              className="text-white font-bold text-[15px]"
            >
              <img src="./search_icon.png" alt="" className="h-7" />
            </button>
            <button
              onClick={handleLogout}
              type="button"
              className="text-white font-bold text-[15px]"
            >
              <img src="./login_icon.png" alt="" className="h-7" />
            </button>
          </div>
        ) : (
          <div className=" space-x-6">
            <Link to="/login">
              <button
                type="button"
                className="text-white font-bold text-[15px]"
              >
                <img src="./login_icon.png" alt="" className="h-7" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
