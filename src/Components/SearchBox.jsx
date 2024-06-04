import React, { useState, useEffect, useRef } from "react";

const SearchBox = ({ visible, setSearchBoxVisible, onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const searchBoxRef = useRef(null);

  const handleSearch = () => {
    onSearch(inputValue);
    setSearchBoxVisible(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClickOutside = (e) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
      setSearchBoxVisible(false);
    }
  };

  useEffect(() => {
    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  return (
    <>
      {visible && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 shadow-2xl">
          <div
            ref={searchBoxRef}
            className="flex items-center bg-white p-4 rounded-[9px]"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Search Movies"
              className="p-4 rounded-[9px] w-1/2"
            />
            <button
              type="button"
              className="ml-4 bg-blue-500 text-white p-2 rounded"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              type="button"
              className="ml-4 bg-red-500 text-white p-2 rounded"
              onClick={() => setSearchBoxVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBox;
