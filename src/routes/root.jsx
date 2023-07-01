import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar/sidebar";
import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdCloseFullscreen } from "react-icons/md";

export const Root = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex">
        <div className="">
          <Sidebar isOpen={open} onClose={() => setOpen(false)} />
          <button
            className="lg:hidden z-[999] fixed bottom-[20px] right-[20px] flex justify-center items-center cursor-pointer text-[18px] w-[50px] h-[50px] rounded-full text-[#fff] border border-[#fff]"
            onClick={() => setOpen(!open)}>
            {open ? <MdCloseFullscreen /> : <AiOutlineMenuUnfold />}
          </button>
        </div>
        <Outlet />
      </div>
    </>
  );
};
