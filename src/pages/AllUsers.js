import React, { useState, useEffect, useRef } from "react";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search";
import EditUsersModal from "../components/EditUsersModal";
import { allUsers, allUsersHeader } from "../dummyData/users";
import { TiDeleteOutline } from "react-icons/ti";
import { RiUserUnfollowLine } from "react-icons/ri";

const AllUsers = () => {
  const [modal, setModal] = useState(null);
  const modalRef = useRef(null);
  useEffect(() => {
    setModal(modalRef.current);
  }, []);

  return (
    <>
      <div className="h-full w-full bg-white p-2 m-auto flex flex-col">
        <h2 className="text-xl md:text-2xl font-semibold px-14 pt-5 border-b-2 border-gray-600 mb-2">
          Users
        </h2>

        <Search />

        <div className="mx-auto my-4 h-full w-11/12">
          <div className="w-full bg-white shadow rounded-lg overflow-auto">
            <table>
              <thead className="bg-gray-500">
                <tr className="font-light text-left px-2 py-4 rounded-lg">
                  {allUsersHeader.map(({ id, title }) => (
                    <th key={id} className="py-4 px-2">
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allUsers.map(({ id, name, location, status, edit, changePassword }) => (
                  <tr key={id} className="text-lg font-bold p-2">
                    <td className="w-18">{id}</td>
                    <td className="w-48">{name}</td>
                    <td className="w-40">{location}</td>
                    <td
                      className={`${status === "Assigned" ? "text-red-600" : "text-gray-200"} w-40`}
                    >
                      {status}
                    </td>
                    <td
                      className="text-red-600 cursor-pointer w-24 pl-2"
                      onClick={() => modal.classList.remove("hidden")}
                    >
                      {edit}
                    </td>
                    <td className="text-red-600 cursor-pointer w-20">
                      <RiUserUnfollowLine className="text-xl" />
                    </td>
                    <td className="text-red-600 cursor-pointer w-20">
                      <TiDeleteOutline className="text-xl" />
                    </td>
                    <td className="w-48 text-gray-200">{changePassword}</td>
                  </tr>
                ))}
              </tbody>
              <EditUsersModal modalRef={modalRef} />
            </table>
          </div>
        </div>

        <div className="w-full h-auto my-5 pt-2">
          <div className="w-11/12 m-auto rounded-lg ">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
