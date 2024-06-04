import React, { useState } from "react";

const FavListForm = ({ visible, setSearchBoxVisible }) => {
  const [formVisible, setFormVisible] = useState(false);

  const handleclose = () => {
    setFormVisible(false);
    visible = formVisible;
  };

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
              className="align-botto p-3 font-bold text-white w-full bg-[#E11D48]"
              type="button"
            >
              Create New Playlist
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FavListForm;
