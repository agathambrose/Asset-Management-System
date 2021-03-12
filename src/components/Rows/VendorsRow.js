import React, {useState} from 'react'

export const VendorsRow = ({ sn, name, category, quantity, edit, remove }) => {

    const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div>
      <div className="bg-white text-lg text-center font-semibold md:h-14 p-2 mb-0.5 mx-1 flex items-center justify-center  h-16">
        <h3
          className="font-black mr-0.5 px-2 w-4
           sm:w-10  "
        >
          {sn}
        </h3>
        <h4 className="text-center mr-0.5 px-2 w-1/6 ">{name}</h4>
        <h4 className=" mr-0.5 px-2 w-2/6">{category}</h4>
        <h4 className=" mr-0.5 px-2 w-1/6">{quantity}</h4>
        <button className=" mr-0.5 px-2 w-2/6 text-red-500 font-bold focus:outline-none" onClick={() => setShowEditModal(true)}>
          {edit}
        </button>
        <button className="ml-3 px-2 w-12 text-red-500 focus:outline-none">
          {remove}
        </button>
      </div>
    </div>
  );
};




