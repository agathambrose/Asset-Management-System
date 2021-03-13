const VendorsPagination = () => {
  return (
    <div className="flex justify-between items-center font-semibold text-lg">
      <div className="">
        <h4 className="p-2">Showing 1-6 0f 9 entries</h4>
      </div>
      <div className="w-1/5 flex justify-between bg-text-center">
        <button className="p-2 flex-1 text-gray-700 hover:text-black mr-1 border-r-2 font-bold focus:outline-none hover:bg-red-600 hover:text-white rounded">
          +Add
        </button>
        <button className="p-2 flex-1 text-gray-700 hover:text-black mr-1 border-r-2 font-bold focus:outline-none hover:bg-red-600 hover:text-white  rounded">
          Export
        </button>
        <button className="p-2 flex-1 mr-1 font-bold focus:outline-none hover:bg-red-600 hover:text-white rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default VendorsPagination;
