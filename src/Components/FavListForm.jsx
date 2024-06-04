import React, { useEffect, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";

const FavListForm = ({ visible, setSearchBoxVisible }) => {
  const [createPlaylistVisible, setCreatePlaylistVisibile] = useState(false);

  //Create Playlist - Start

  const [playListName, setPlaylistName] = useState("");
  const [playlistAccess, setPlaylistAccess] = useState("");

  const handleRadioChange = (value) => {
    setPlaylistAccess(value);
  };

  //Create Playlist - End

  return (
    <>
      {visible && (
        <div className="absolute flex inset-0 justify-center items-center bg-black bg-opacity-25">
          <div className=" py-4 bg-white w-[300px] h-[250px] rounded-[30px] ">
            <div className="flex px-7 space-x-9">
              <p className="text-2xl font-bold ">Save Movie to...</p>
              <img
                src="\close.png"
                alt=""
                className="h-5 mt-1"
                onClick={() => setSearchBoxVisible(false)}
              />
            </div>
            <div className="px-7 mt-3">
              <p className="items-center flex text-xl mb-2">
                <input type="checkbox" name="" id="" className="h-5 w-5 " />
                <span className="font-medium ml-2">To Watch</span>
              </p>
              <p className="items-center flex text-xl">
                <input type="checkbox" name="" id="" className="h-5 w-5 " />
                <span className="font-medium ml-2">To Watch</span>
              </p>
            </div>
            <button
              className="mt-[80px] p-3 font-bold text-white w-full bg-[#E11D48]"
              type="button"
              onClick={() => setCreatePlaylistVisibile(true)}
            >
              + Create New Playlist
            </button>
            {createPlaylistVisible && (
              <div className="p-4 bg-[#E11D48] h-[145px] rounded-b-[20px] text-white">
                <div className="flex items-center">
                  <p className="font-bold">Name</p>
                  <input
                    type="text"
                    placeholder="Type movielist name"
                    className="ml-5 p-1 bg-transparent placeholder-white underline underline-offset-2"
                  />
                </div>
                <div className="flex mt-2">
                  <p className="font-bold">Privacy</p>
                  <input
                    type="radio"
                    id="private"
                    value="private"
                    checked={playlistAccess === "private"}
                    onChange={() => handleRadioChange("private")}
                    className="ml-3 text-[14px]"
                  />{" "}
                  Private
                  <input
                    type="radio"
                    id="public"
                    value="public"
                    checked={playlistAccess === "public"}
                    onChange={() => handleRadioChange("public")}
                    className="ml-3 text-[14px]"
                  />{" "}
                  Public
                </div>
                <button
                  className="mt-3 px-3 py-2 font-bold text-[#E11D48] bg-white rounded-[5px]"
                  type="button"
                >
                  Create
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FavListForm;
