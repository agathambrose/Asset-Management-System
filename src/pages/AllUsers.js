// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/features/allUsers/allUsersSlice";
import AllUsersPagination from "../components/Pagination/AllUsersPagination";
import Search from "../components/Search";
import EditUsersModal from "../components/EditUsers/EditUsersModal";
import { allUsersHeader } from "../dummyData/users";
import { TiDeleteOutline } from "react-icons/ti";
import { RiUserUnfollowLine } from "react-icons/ri";

const AllUsers = () => {
  const { users } = useSelector(state => state.allUsers);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(null);
  const modalRef = useRef(null);
  useEffect(() => {
    setModal(modalRef.current);
  }, []);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

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
                {users.map(data => (
                  <tr key={data.id} className="text-lg font-bold p-2">
                    <td className="w-18">{data.id}</td>
                    <td className="w-48">
                      {data.first_name} {data.last_name}
                    </td>
                    <td className="w-40">General 1</td>
                    <td className="text-red-600">Assigned</td>
                    <td
                      className="text-red-600 cursor-pointer w-24 pl-2"
                      onClick={() => modal.classList.remove("hidden")}
                    >
                      Edit
                    </td>
                    <td className="text-red-600 cursor-pointer w-20">
                      <RiUserUnfollowLine className="text-xl" />
                    </td>
                    <td className="text-red-600 cursor-pointer w-20">
                      <TiDeleteOutline className="text-xl" />
                    </td>
                    <td className="w-48 text-gray-200">Change Password</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <EditUsersModal modalRef={modalRef} />
          </div>
        </div>

        <div className="w-full h-auto my-5 pt-2">
          <div className="w-11/12 m-auto rounded-lg ">
            <AllUsersPagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
