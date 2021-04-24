import React, { useState, useEffect, useRef } from "react";
import AddUsersModal from "../AddUsers/AddUsersModal";

const Pagination = ({ handleNextClick, handlePrevClick, currentPage, totalPages }) => {
  const [modal, setModal] = useState(null);
  const modalRef = useRef(null);
  useEffect(() => {
    setModal(modalRef.current);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center font-semibold text-lg">
        <div className="">
          <h4 className="p-2">
            Showing {currentPage} of {totalPages}
          </h4>
        </div>
        <div className="w-1/5 flex justify-between bg-text-center">
          <button
            onClick={() => modal.classList.remove("hidden")}
            className="p-2 flex-1 text-gray-700 mr-1 border-r-2 font-bold focus:outline-none hover:bg-red-600 hover:text-white rounded"
          >
            +Add
          </button>
          <button className="p-2 flex-1 text-gray-70 mr-1 border-r-2 font-bold focus:outline-none hover:bg-red-600 hover:text-white  rounded">
            Export
          </button>
          <div>
            {currentPage > 1 && (
              <button
                className="p-2 flex-1 mr-1 font-bold focus:outline-none hover:bg-red-600 hover:text-white rounded"
                onClick={handlePrevClick}
              >
                Prev
              </button>
            )}
          </div>
          <div>
            {currentPage !== totalPages && (
              <button
                className="p-2 flex-1 mr-1 font-bold focus:outline-none hover:bg-red-600 hover:text-white rounded"
                onClick={handleNextClick}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <AddUsersModal modalRef={modalRef} />
      </div>
    </>
  );
};

export default Pagination;
