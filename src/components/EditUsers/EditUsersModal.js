import React from "react";
import EditUsersForm from "./EditUsersForm";

const EditUsersModal = ({ modalRef }) => {
  const modal = modalRef.current;

  return (
    <>
      <div
        ref={modalRef}
        className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 hidden"
        onClick={e => {
          if (e.target !== e.currentTarget) return;
          modal.classList.add("hidden");
        }}
      >
        <EditUsersForm modal={modal} />
      </div>
    </>
  );
};

export default EditUsersModal;
