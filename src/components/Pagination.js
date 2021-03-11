import React from "react";

function Pagination() {
  return (
    <div className="flex justify-between items-center font-semibold text-lg">
      <div className="">
        <h4 className="p-2">Showing 1-6 0f 9 entries</h4>
      </div>
      <div className="w-1/5 flex justify-between bg-text-center">
        <span className="p-2 flex-1  mr-1 border-r-2">Edit</span>
        <span className="p-2 flex-1  mr-1 border-r-2">Export</span>
        <span className="p-2 flex-1  mr-1">Next</span>
      </div>
    </div>
  );
}

export default Pagination;
