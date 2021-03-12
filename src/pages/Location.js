import Pagination from "../components/Pagination";
import LocationRow from "../components/Rows/LocationRow";
import { locationList } from "../dummyData/assets";

const Location = () => {
  return (
    <div className="h-full w-full bg-white p-2 m-auto flex flex-col">
      {/* TITLE */}

      <h2 className=" text-base md:text-xl font-semibold px-14  border-b-2 mb-2">Location</h2>
      {/* SEARCH BAR */}
      <div className="w-full flex justify-end md:pr-14 pr-10">
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
            <h4 className="mr-0.5 px-2 w-1/6 ">S/N</h4>
            <h4 className="mr-0.5 px-2 w-2/4">Office</h4>
            <h4 className="mr-0.5 px-2 w-1/4">Edit</h4>
            <h4 className="mr-0.5 px-2 w-1/4">Remove</h4>
          </div>

          {locationList.map(({ office, edit, remove }, index) => (
            <LocationRow key={index} sn={index + 1} office={office} edit={edit} remove={remove} />
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

export default Location;
