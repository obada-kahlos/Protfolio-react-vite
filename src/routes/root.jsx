import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar/sidebar";
import { useEffect, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdCloseFullscreen } from "react-icons/md";
import Loader from "../components/loader/loader";
import { Nav } from "../components/nav/nav";

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
              className="lg:hidden z-[999] fixed bottom-[20px] right-[20px] flex justify-center items-center cursor-pointer text-[18px] w-[50px] h-[50px] rounded-full dark:text-titleDarkColor border dark:border-titleDarkColor text-titleLightColor border-titleLightColor"
              onClick={() => setOpen(!open)}>
              {open ? <MdCloseFullscreen /> : <AiOutlineMenuUnfold />}
            </button>
          </div>
          <div className="lg:ml-[300px]">
            <Nav />
            <Outlet />
          </div>
          <div className="fixed top-[-120px] blur-2xl right-[-120px] w-[300px] h-[300px] rounded-full bg-[#ff870020]"></div>
          <div className="fixed bottom-[-120px] z-[999] blur-2xl left-[-120px] w-[300px] h-[300px] rounded-full bg-[#ff870020]"></div>
        </div>
      )}
    </>
  );
};
