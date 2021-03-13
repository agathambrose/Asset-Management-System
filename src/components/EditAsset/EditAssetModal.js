import React from "react";
import {
  AssetID,
  Category,
  Name,
  Serial,
  Status,
  Location,
  TextArea,
  ImageInput,
} from "./EditAsset";
// import {BsFillImageFill} from 'react-icons/bs'

const EditAssetModal = ({ modalRef }) => {
  const modal = modalRef.current;
  return (
    <div
      ref={modalRef}
      className="h-screen mt-5 w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 hidden"
      onClick={e => {
        if (e.target !== e.currentTarget) return;
        modal.classList.add("hidden");
      }}
    >
      <div className="bg-white flex flex-col rounded-md shadow-lg w-1/3 p-8 pb-4 space-y-5">
        <div>
          <h1 className="font-bold text-center text-xl">Edit Asset</h1>
        </div>
        <hr />
        <div className="flex justify-between">
          <AssetID className="w-1/2 mr-2" />
          <Category className="w-1/2" />
        </div>

        <div className="flex justify-between">
          <Name type="text" placeholder="Name" className="w-1/2 mr-2" />
          <Serial type="text" placeholder="Serial #" className="w-1/2" />
        </div>

        <div className="flex justify-between">
          <Status className="w-1/2 mr-2" />
          <Location className="w-1/2" />
        </div>

        <div className="flex justify-between">
          <TextArea
            name="description"
            placeholder="Description (Optional)"
            className="w-1/2 mr-2"
          />
          <ImageInput
            type="file"
            id="img"
            name="img"
            accept="image/*"
            placeholder="Upload Image"
            className="w-1/2"
          />
        </div>

        <div className="flex justify-between font-semibold">
          <p
            className="text-gray-700 cursor-pointer font-bold py-2 px-3 rounded-md hover:bg-gray-300"
            onClick={e => modal.classList.add("hidden")}
          >
            Cancel
          </p>
          <p
            className="text-red-500 font-bold cursor-pointer py-2 px-3 rounded-md hover:bg-red-500 hover:text-white"
            onClick={e => modal.classList.add("hidden")}
          >
            Update
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditAssetModal;
