import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar/sidebar";
import { useEffect, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdCloseFullscreen } from "react-icons/md";
import Loader from "../components/loader/loader";

export const Root = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [3000]);
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="">
          <div className="">
            <Sidebar isOpen={open} onClose={() => setOpen(false)} />
            <button
              className="lg:hidden z-[999] fixed bottom-[20px] right-[20px] flex justify-center items-center cursor-pointer text-[18px] w-[50px] h-[50px] rounded-full text-[#fff] border border-[#fff]"
              onClick={() => setOpen(!open)}>
              {open ? <MdCloseFullscreen /> : <AiOutlineMenuUnfold />}
            </button>
          </div>
          <div className="lg:ml-[300px]">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};
