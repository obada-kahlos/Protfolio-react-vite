import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar/sidebar";

export const Root = () => {
  return (
    <>
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="bg-secondDarkBgColor w-full flex justify-center items-center text-[#fff]">
          <Outlet />
        </div>
      </div>
    </>
  );
};
