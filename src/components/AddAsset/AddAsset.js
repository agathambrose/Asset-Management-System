export const ProductName = ({ type, className, placeholder }) => {
  return (
    <input
      type={type}
      className={`form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3 ${
        className ? className : ""
      }`}
      placeholder={placeholder}
      autoComplete="on"
    />
  );
};

export const Category = ({ className }) => {
  return (
    <select
      name="category"
      id="category"
      required
      className={`form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3 ${
        className ? className : ""
      }`}
    >
      <option value="Category" disabled selected hidden>
        Category
      </option>
      <option value="stuff">Stuff</option>
    </select>
  );
};

export const SerialNumber = ({ type, className, placeholder }) => {
  return (
    <input
      type={type}
      className={`form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3 ${
        className ? className : ""
      }`}
      placeholder={placeholder}
      autoComplete="on"
    />
  );
};

export const Vendor = ({ type, className, placeholder }) => {
  return (
    <input
      type={type}
      className={`form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3 ${
        className ? className : ""
      }`}
      placeholder={placeholder}
      autoComplete="on"
    />
  );
};

export const Price = ({ type, className, placeholder }) => {
  return (
    <input
      type={type}
      className={`form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3 ${
        className ? className : ""
      }`}
      placeholder={placeholder}
      autoComplete="on"
    />
  );
};

export const DateOfPurchase = ({ type, className, placeholder }) => {
  return (
    <input
      type={type}
      className={`form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3 ${
        className ? className : ""
      }`}
      placeholder={placeholder}
      autoComplete="on"
    />
  );
};

export const ModeOfPayment = ({ type, className, placeholder }) => {
  return (
    <input
      type={type}
      className={`form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3 ${
        className ? className : ""
      }`}
      placeholder={placeholder}
      autoComplete="on"
    />
  );
};

export const WarrantyExpiryDate = ({ className }) => {
  return (
    <select
      name="Warranty Expiry Date"
      id="Warranty"
      required
      className={`form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3 ${
        className ? className : ""
      }`}
    >
      <option value="Warranty Expiry Date" disabled selected hidden>
        Warranty Expiry Date
      </option>
      <option value="stuff">Stuff</option>
    </select>
  );
};

export const TextArea = ({ name, className, placeholder }) => {
  return (
    <textarea
      name={name}
      className={`form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3 ${
        className ? className : ""
      }`}
      placeholder={placeholder}
    />
  );
};

export const ImageInput = ({ type, id, name, accept, className, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      accept={accept}
      name={name}
      className={`form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3 ${
        className ? className : ""
      }`}
      placeholder={placeholder}
    />
  );
};
