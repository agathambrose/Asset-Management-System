export const AssetID = ({ className }) => {
  return (
    <select
      name="assetId"
      id="assetId"
      required
      className={`form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3 ${
        className ? className : ""
      }`}
    >
      <option value="Warranty Expiry Date" disabled selected hidden>
        Asset Id
      </option>
      <option value="stuff">Stuff</option>
    </select>
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

export const Name = ({ type, className, placeholder }) => {
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

export const Serial = ({ type, className, placeholder }) => {
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

export const Status = ({ className }) => {
  return (
    <select
      name="status"
      id="status"
      required
      className={`form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3 ${
        className ? className : ""
      }`}
    >
      <option value="Status" disabled selected hidden>
        Status
      </option>
      <option value="stuff">Stuff</option>
    </select>
  );
};

export const Location = ({ className }) => {
  return (
    <select
      name="location"
      id="location"
      required
      className={`form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3 ${
        className ? className : ""
      }`}
    >
      <option value="Loation" disabled selected hidden>
        Location
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
