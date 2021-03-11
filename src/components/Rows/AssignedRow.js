const AssignedRow = ({ sn, name, category, quantity }) => {
  return (
    <div className="bg-white text-lg text-center font-semibold md:h-14 p-2 mb-0.5 mx-1 flex items-center justify-center  h-16">
      <h3
        className=" font-black mr-0.5 px-2 w-4
           sm:w-12   "
      >
        {sn}
      </h3>
      <h4 className=" mr-0.5 px-2 w-3/5">{name}</h4>
      <h4 className=" mr-0.5 px-2 w-1/5">{category}</h4>
      <h4 className=" mr-0.5 px-2 w-1/5">{quantity}</h4>
    </div>
  );
};

export default AssignedRow;
