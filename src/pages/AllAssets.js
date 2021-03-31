import AssetPagination from "../components/Pagination/AssetPagination";
import { useEffect } from "react";
import AllAssetRow from "../components/Rows/AllAssetRow";
import Search from "../components/Search";
import { allAssetList } from "../dummyData/assets";
import { useSelector, useDispatch } from "react-redux";

import { getAssets } from ".././redux/features/assets/assetSlice";
const AllAssets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAssets());
  }, []);
  const { asset } = useSelector(state => state.asset);
  console.log(asset);
  return (
    <div className="h-full w-full bg-white p-2 m-auto flex flex-col">
      <h2 className=" text-base md:text-2xl font-semibold px-14  border-b-2 mb-2">
        All Assets
      </h2>
      <Search />

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
          {asset.map(({ id, name, category, quantity, location }, index) => (
            <AllAssetRow
              key={id}
              sn={index + 1}
              name={name}
              category={category}
              quantity={quantity}
              location={location}
              edit="edit"
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

export default AllAssets;
