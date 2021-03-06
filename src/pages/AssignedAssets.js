import AssetPagination from "../components/Pagination/AssetPagination";
import AssignedRow from "../components/Rows/AssignedRow";
import Search from "../components/Search";
import { allAssetList } from "../dummyData/assets";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { getAssigned } from "../redux/features/assets/assetSlice";

const AssignedAssets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAssigned());
  }, []);
  const { assignedAssets } = useSelector(state => state.asset);
  return (
    <div className="h-full w-full bg-white p-2 m-auto flex flex-col">
      <h2 className=" text-base md:text-2xl font-semibold px-14  border-b-2 mb-2">
        Assigned Assets
      </h2>
      <Search />
      <div className=" w-full h-auto mt-2 pt-2">
        <div className="w-11/12 m-auto rounded-lg border border-gray-700">
          <div className="bg-gray-600 rounded-t text-lg text-center font-black h-14 mb-1 p-2  flex items-center justify-center">
            <h4 className="mr-0.5 px-2 w-12 ">S/N</h4>
            <h4 className="mr-0.5 px-2 w-3/5">Name</h4>
            <h4 className="mr-0.5 px-2 w-1/5">Category</h4>
            <h4 className="mr-0.5 px-2 w-1/5">Quantity</h4>
          </div>
          {assignedAssets.length < 1 ? (
            <h2 className="text-center font-bold text-2xl my-5">
              No Available Assigned Asset
            </h2>
          ) : (
            assignedAssets.map(({ name, category, quantity }, index) => (
              <AssignedRow
                key={index}
                sn={index + 1}
                name={name}
                category={category}
                quantity={quantity}
              />
            ))
          )}
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

export default AssignedAssets;
