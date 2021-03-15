import React from "react";
// import {IoSearchOutline} from 'react-icons/io5'

const Search = () => {
  return (
    <>
      <div className="w-full flex justify-end px-14 pt-3">
        {/* <span><IoSearchOutline /></span> */}
        <input
          type="text"
          className="border w-3/5 border-gray-600 rounded-l-lg px-3 py-1 sm:w-1/3"
        />
        <button className="bg-red-600 px-3 py-1 rounded-r-lg font-bold">Search</button>
      </div>
    </>
  );
};

export default Search;
