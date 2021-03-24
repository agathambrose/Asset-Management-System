const VerifyEmail = () => {
  return (
    <div className=" bg-gray-600 min-h-screen flex flex-col h-auto pt-20">
      <header className="flex justify-between p-3 bg-white fixed left-0 top-0 w-full z-10 h-90 border-b-3 border-gray-600" />
      <div className="flex flex-1 justify-between">
        <nav className="bg-white flex flex-col w-1/6 items-center justify-between pb-2" />
        <div className="w-5/6 flex flex-1 p-8 pb-0 justify-center items-center">
          <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg w-2/3 m-auto h-96 px-8 py-16 font-medium text-center">
            <p className="text-xl">
              Thank you for registering with us, An email verification link has been sent
              to your registered email address. Please click on the link to verify your
              account.
            </p>
            <p>
              Didnt get an email? Please notify us by sending a mail to{" "}
              <span className="text-red-500 hover:underline">
                <a href="mailto:support@hasob.ng">support@hasob.ng</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
