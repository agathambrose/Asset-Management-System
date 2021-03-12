import DashboardButton from "../components/DashboardButton";
import graph1 from "../assets/graph-1.png";
import graph2 from "../assets/graph-2.png";
import graph3 from "../assets/graph-3.png";

const Dashboard = () => {
  return (
    <div className="relative bg-white flex-1 flex flex-col">
      {/* First divider */}
      <hr className="absolute top-20 border w-full border-gray-600 " />
      {/* Second divider */}
      <hr className="absolute top-540 border w-full border-gray-600 " />
      <div className="flex flex-col pt-6 pl-12">
        <h2 className="font-semibold text-2xl mb-10">Dashboard</h2>
        <div className="flex flex-wrap pl-5">
          <DashboardButton path="/all-assets" className="bg-red-600">
            Assets
          </DashboardButton>
          <DashboardButton path="/assigned-assets" className="bg-yellow">
            Assigned Assets
          </DashboardButton>
          <DashboardButton path="/unassigned-assets" className="bg-pink">
            UnAssigned Assets
          </DashboardButton>
          <DashboardButton path="/vendors" className="bg-gray-400">
            Vendors
          </DashboardButton>
          <DashboardButton path="/locations" className="bg-blue-400">
            Locations
          </DashboardButton>
          <DashboardButton path="/users" className="bg-red-400">
            Users
          </DashboardButton>
          <DashboardButton path="/notifications" className="bg-red-500">
            Notifications
          </DashboardButton>
        </div>
      </div>
      <div className="flex flex-col pl-12">
        <h2 className="font-semibold text-2xl">Visualization</h2>
        <div className="flex mt-10 justify-between pr-32 pb-10">
          <div className="w-72">
            <img src={graph1} alt="Graph" />
          </div>
          <div className="w-60 p-3 rounded-xl shadow-lg">
            <img src={graph2} alt="Graph" />
          </div>
          <div className="w-52">
            <img src={graph3} alt="Graph" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
