import { useEffect, useRef, useState } from "react";
import EditAssetModal from "../EditAsset/EditAssetModal";
import { Link } from "react-router-dom";

const AllAssetRow = ({ sn, name, category, quantity, location, edit }) => {
  const [modal, setModal] = useState(null);
  const modalRef = useRef(null);
  useEffect(() => {
    setModal(modalRef.current);
  }, []);
  return (
    <>
      <Link to={{ pathname: `/view-assets/${sn}` }}>
        <div className="bg-white text-lg text-center font-semibold md:h-14 p-2 mb-0.5 mx-1 flex items-center justify-center h-16 hover:bg-gray-300">
          <h3 className="font-black mr-0.5 px-2 w-4 sm:w-12">{sn}</h3>
          <h4 className="text-center mr-0.5 px-2 w-3/6">{name}</h4>
          <h4 className=" mr-0.5 px-2 w-1/6">{category}</h4>
          <h4 className=" mr-0.5 px-2 w-1/6">{quantity}</h4>
          <h4 className=" mr-0.5 px-2 w-2/6">{location}</h4>
          <span>
            <button
              className="px-2 w-12 font-bold focus:outline-none text-red-500"
              onClick={() => modal.classList.remove("hidden")}
            >
              {edit}
            </button>
            <EditAssetModal modalRef={modalRef} />
          </span>
        </div>
      </Link>
    </>
  );
};

export default AllAssetRow;
