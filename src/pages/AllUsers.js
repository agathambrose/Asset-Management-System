// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
//import axios from 'axios'
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
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUsers, setCurrentUsers] = useState([]);
  const usersPerPage = 10;
  const totalPages = users && Math.ceil(users.length / usersPerPage);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  // const deleteUser = (id) => {
  //   try {
  //     axios.delete(`/users/${id}`)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  //Pagination
  useEffect(() => {
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    if (users) {
      setCurrentUsers(users.slice(indexOfFirstUser, indexOfLastUser));
    }
    window.scrollTo(0, 0);
  }, [currentPage, users]);

  const handleNextClick = () => {
    setCurrentPage(prev => prev + 1);
  };
  const handlePrevClick = () => {
    setCurrentPage(prev => prev - 1);
  };

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
        <div className="mx-auto my-4 h-full">
          <div className="w-full bg-white shadow rounded-lg overflow-auto">
            <table>
              <thead className="bg-gray-500">
                <tr className="font-light text-left py-4 rounded-lg">
                  {allUsersHeader.map(({ id, title }) => (
                    <th key={id} className="py-4 px-2">
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((data, index) => (
                  <tr key={index} className="text-lg font-bold p-2">
                    <td className="w-18">{index + 1}</td>
                    <td className="w-40">
                      {data.first_name} {data.last_name}
                    </td>
                    <td className="w-40">{data.office ? data.office : "General 1"}</td>
                    <td className="text-red-600 w-40">Assigned</td>
                    <td
                      className="text-red-600 cursor-pointer w-20 pl-2"
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
            <AllUsersPagination
              handleNextClick={handleNextClick}
              handlePrevClick={handlePrevClick}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
