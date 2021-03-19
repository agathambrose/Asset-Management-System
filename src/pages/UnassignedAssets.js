import AssetPagination from "../components/Pagination/AssetPagination";
import UnassignedRow from "../components/Rows/UnassignedRow";
import Search from "../components/Search";
import { allAssetList } from "../dummyData/assets";

const UnassignedAssets = () => {
  return (
    <div className="h-full w-full bg-white p-2 m-auto flex flex-col">
      <h2 className=" text-base md:text-2xl font-semibold px-14  border-b-2 mb-2">
        Unassigned Assets
      </h2>
      <Search />
      <div className=" w-full h-auto mt-2 pt-2">
        <div className="w-11/12 m-auto rounded-lg border border-gray-700 ">
          <div className="bg-gray-600 rounded-t text-lg text-center font-black h-14 mb-1 p-2  flex items-center justify-center">
            <h3 className="mr-0.5 px-2 w-12 ">S/N</h3>
            <h4 className="mr-0.5 px-2 w-3/5">Name</h4>
            <h4 className="mr-0.5 px-2 w-1/5">Category</h4>
            <h4 className="mr-0.5 px-2 w-1/5">Quantity</h4>
            <h4 className=" px-2 w-1/5">Assign</h4>
          </div>

          {allAssetList.map(({ name, category, quantity, assign }, index) => (
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
            <AssetPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnassignedAssets;
