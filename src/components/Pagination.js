import React from "react";

function Pagination() {
  return (
    <div className="flex justify-between items-center">
      <div className="border bg-blue-400">
        <h4 className="p-2">Showing 1-6 0f 9 entries</h4>
      </div>
      <div className="   flex justify-between bg-red-400 text-left">
        <span className=" p-2  mr-1 border-r-2">+Add</span>
        <span className=" p-2  mr-1 border-r-2">Export</span>
        <span className=" p-2  mr-1">Next</span>
      </div>
    </div>
  );
}

export default Pagination;
