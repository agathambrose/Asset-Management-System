import Pagination from "../components/Pagination";
import UnassignedRow from "../components/Rows/UnassignedRow";
import { allUnassignedAssets } from "../dummyData/assets";

const UnassignedAssets = () => {
  return (
    <div className="h-full w-full bg-white p-2 m-auto flex flex-col">
      <h2 className=" text-base md:text-xl font-semibold px-14  border-b-2 mb-2">
        Unassigned Assets
      </h2>
      <div className="w-full flex justify-end px-14 ">
        <input
          type="text"
          className="border w-3/5 border-gray-600 rounded-l-lg  px-3 py-1 sm:w-1/3"
        />
        <button className="bg-red-600 px-3 py-1 rounded-r-lg font-bold">Search</button>
      </div>
      <div className=" w-full h-auto mt-2 pt-2">
        <div className="w-11/12 m-auto rounded-lg border border-gray-700 ">
          <div className="bg-gray-600 rounded-t text-lg text-center font-black h-14 mb-1 p-2  flex items-center justify-center">
            <h3 className="mr-0.5 px-2 w-12 ">S/N</h3>
            <h4 className="mr-0.5 px-2 w-3/5">Name</h4>
            <h4 className="mr-0.5 px-2 w-1/5">Category</h4>
            <h4 className="mr-0.5 px-2 w-1/5">Quantity</h4>
            <h4 className=" px-2 w-1/5">Assign</h4>
          </div>

          {allUnassignedAssets.map(({ name, category, quantity, assign }, index) => (
            <UnassignedRow
              key={index}
              sn={index + 1}
              name={name}
              category={category}
              quantity={quantity}
              assign={assign}
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
  );
};

export default UnassignedAssets;
