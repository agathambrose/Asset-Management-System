import {
  ProductName,
  Category,
  SerialNumber,
  Vendor,
  Price,
  DateOfPurchase,
  ModeOfPayment,
  WarrantyExpiryDate,
  TextArea,
  ImageInput,
} from "../AddAsset/AddAsset";

const AddAssetModal = ({ modalRef }) => {
  const modal = modalRef.current;
  return (
    <div
      ref={modalRef}
      className="h-screen w-full fixed mt-6 left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 hidden"
      onClick={e => {
        if (e.target !== e.currentTarget) return;
        modal.classList.add("hidden");
      }}
    >
      <div className="bg-white flex flex-col rounded-md shadow-lg w-1/3 p-8 pb-4 space-y-5">
        <div>
          <h1 className="font-bold text-center text-xl">Add Asset</h1>
        </div>

        <hr />

        <div className="flex justify-between">
          <ProductName type="text" placeholder="Product Name" className="w-1/2 mr-2" />
          <Category className="w-1/2" />
        </div>

        <div className="flex justify-between">
          <SerialNumber type="text" placeholder="Serial Number" className="w-1/2 mr-2" />
          <Vendor type="text" placeholder="Vendor" className="w-1/2" />
        </div>

        <div className="flex justify-between">
          <Price type="text" placeholder="Price (N)" className="w-1/2 mr-2" />
          <DateOfPurchase type="text" placeholder="Date of Purchase" className="w-1/2" />
        </div>

        <div className="flex justify-between">
          <ModeOfPayment type="text" placeholder="Mode of Payment" className="w-1/2 mr-2" />
          <WarrantyExpiryDate className="w-1/2" />
        </div>

        <div className="flex justify-between">
          <TextArea name="description" placeholder="Description" className="w-1/2 mr-2" />
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
            className="text-gray-700 cursor-pointer py-2 px-3 rounded-md hover:bg-gray-300"
            onClick={e => modal.classList.add("hidden")}
          >
            Cancel
          </p>
          <p
            className="text-red-500 cursor-pointer py-2 px-3 rounded-md hover:bg-red-500 hover:text-white"
            onClick={e => modal.classList.add("hidden")}
          >
            Update
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddAssetModal;
