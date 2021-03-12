import Header from "./Header";
import SideNav from "./SideNav/SideNav";

const MainContainer = ({ children }) => {
  return (
    <div className=" bg-gray-600 min-h-screen flex flex-col h-auto pt-20">
      <Header />
      <div className="flex flex-1 justify-between">
        <SideNav />
        <div className=" w-5/6 flex flex-1 p-8 pb-0">{children}</div>
      </div>
    </div>
  );
};

export default MainContainer;
