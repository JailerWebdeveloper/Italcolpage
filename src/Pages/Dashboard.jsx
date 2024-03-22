import { Outlet } from "react-router-dom";
import SideMenu from "../components/Sidemenu.jsx";

const Dashboard = () => {
  return (
    <>
      <div className=" overflow-y-auto w-screen h-screen antialiased ">
        <div className="flex md:flex-row  flex-col relative w-screen">
          <SideMenu />

          <div className="w-full flex md:block bg-base  overflow-y-auto flex-col relative h-screen p-4">

            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
