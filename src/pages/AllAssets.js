import Pagination from "../components/Pagination";
import MainContainer from "../components/MainContainer";
import AllAssetRow from "../components/Rows/AllAssetRow";
import { allAssetList } from "../dummyData/assets";

const AllAssets = () => {
  return (
    <MainContainer>
      <div className="h-full w-full bg-white p-2 m-auto flex flex-col">
        {/* TITLE */}

        <h2 className=" text-base md:text-xl font-semibold px-14  border-b-2 mb-2">All Assets</h2>
        {/* SEARCH BAR */}

        <div className="w-full flex justify-end px-14 ">
          <input
            type="text"
            className="border w-3/5 border-gray-600 rounded-l-lg  px-3 py-1 sm:w-1/3"
          />
          <button className="bg-red-600 px-3 py-1 rounded-r-lg font-bold">Search</button>
        </div>

        {/* ROWS */}

        <div className=" w-full h-auto mt-2 pt-2">
          <div className="w-11/12 m-auto rounded-lg border border-gray-700 ">
            <div className="bg-gray-600 rounded-t text-lg text-center font-black h-14 mb-1 p-2  flex items-center justify-center">
              <h4 className=" mr-0.5 px-2 w-4 sm:w-12">S/N </h4>
              <h4 className="mr-0.5 px-2 w-3/6">Name</h4>
              <h4 className="mr-0.5 px-2 w-1/6">Categories</h4>
              <h4 className="mr-0.5 px-2 w-1/6">Quantity</h4>
              <h4 className="mr-0.5 px-2 w-2/6">Location</h4>
              <h4 className=" px-2 w-12">Edit</h4>
            </div>
            {/* Body */}
            {allAssetList.map(({ name, category, quantity, location, edit }, index) => (
              <AllAssetRow
                key={index}
                sn={index + 1}
                name={name}
                category={category}
                quantity={quantity}
                location={location}
                edit={edit}
              />
            ))}
          </div>
          <div className="w-full h-auto mt-2 pt-2">
            <div className="w-11/12 m-auto rounded-lg ">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default AllAssets;
