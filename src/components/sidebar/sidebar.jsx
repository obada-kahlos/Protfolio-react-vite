import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BiUser, BiArrowBack } from "react-icons/bi";
import { TbButterfly, TbBrandTelegram } from "react-icons/tb";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaFacebookF, FaWhatsapp, FaGithubAlt } from "react-icons/fa";
export const Sidebar = () => {
  const sidebarData = [
    {
      url: "/About",
      text: "About",
      icon: <BiUser />,
    },
    {
      url: "/Projects",
      text: "Projects",
      icon: <AiOutlineFundProjectionScreen />,
    },
    {
      url: "/Contact",
      text: "Contact",
      icon: <TbBrandTelegram />,
    },
    {
      url: "/Skills",
      text: "Skills",
      icon: <TbButterfly />,
    },
  ];
  return (
    <React.Fragment>
      <div className="relative w-[300px] bg-secondDarkBgColor">
        <div className="h-screen rounded-tr-[15px] rounded-br-[15px] bg-firstDarkBgColor flex justify-between flex-col">
          <div className="">
            <div className="w-full flex justify-between items-center py-[30px] border-b border-main-color px-2">
              <p className="text-white"> Welcome </p>
              <Link to="/Welcome">
                <span className="hover-icon">
                  <BiArrowBack />
                </span>
              </Link>
            </div>
            <ul>
              {sidebarData.map((sideItem, key) => (
                <NavLink to={sideItem.url} key={`${key}-${sideItem.text}`}>
                  <li className="transition hover:bg-main-color cursor-pointer text-white px-[20px] flex items-center gap-2 py-[15px] mb-[0px] w-full">
                    <span> {sideItem.icon} </span>
                    <p> {sideItem.text} </p>
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="w-full flex justify-center items-center gap-4 py-[30px] border-t border-main-color px-2">
            <span className="w-[30px] h-[30px] cursor-pointer rounded-full flex justify-center items-center text-[#fff] border border-[#fff]">
              <FaFacebookF />
            </span>
            <span className="w-[30px] h-[30px] cursor-pointer rounded-full flex justify-center items-center text-[#fff] border border-[#fff]">
              <FaWhatsapp />
            </span>
            <span className="w-[30px] h-[30px] cursor-pointer rounded-full flex justify-center items-center text-[#fff] border border-[#fff]">
              <FaGithubAlt />
            </span>
          </div>
        </div>
      </div>
      <style>
        {`
           a.active {
            background-color: #ff8700;
            color: #fff;
            display: block;
            width: 100%;
          }
        `}
      </style>
    </React.Fragment>
  );
};
