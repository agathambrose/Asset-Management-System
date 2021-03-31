import AssetPagination from "../components/Pagination/AssetPagination";
import LocationRow from "../components/Rows/LocationRow";
import Search from "../components/Search";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocation } from ".././redux/features/assets/assetSlice";

const Locations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
  }, []);

  const { location, loading } = useSelector(state => state.asset);
  return (
    <div className="h-full w-full bg-white p-2 m-auto flex flex-col">
      <h2 className=" text-base md:text-2xl font-semibold px-14  border-b-2 mb-2">
        Locations
      </h2>
      <Search />
      <div className=" w-full h-auto mt-2 pt-2">
        <div className="w-11/12 m-auto rounded-lg border border-gray-700 ">
          <div className="bg-gray-600 rounded-t text-lg text-center font-black h-14 mb-1 p-2  flex items-center justify-center">
            <h4 className="mr-0.5 px-2 w-1/6 ">S/N</h4>
            <h4 className="mr-0.5 px-2 w-2/4">Office</h4>
            <h4 className="mr-0.5 px-2 w-1/4">Edit</h4>
            <h4 className="mr-0.5 px-2 w-1/4">Remove</h4>
          </div>

          {location.map(({ name }, index) => (
            <LocationRow
              key={index}
              sn={index + 1}
              office={name}
              edit="edit"
              remove="edit"
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

export default Locations;
