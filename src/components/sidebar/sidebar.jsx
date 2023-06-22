/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, Link, useParams, useLocation } from "react-router-dom";
import { BiUser, BiArrowBack } from "react-icons/bi";
import { TbButterfly, TbBrandTelegram } from "react-icons/tb";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaFacebookF, FaWhatsapp, FaGithubAlt } from "react-icons/fa";
import obadaImage from "/public/image/obada.jpg";
// eslint-disable-next-line react/prop-types
export const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { pathname } = location;
  console.log({ pathname });
  const sidebarData = [
    {
      url: "/",
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
      <div className="sidebar relative w-[300px]  bg-secondDarkBgColor">
        <div className="h-screen overflow-hidden rounded-tr-[15px] rounded-br-[15px] bg-firstDarkBgColor flex justify-between flex-col">
          <div className="">
            {pathname === "/" ? null : (
              <div className="sidebar-about w-full flex items-center gap-3 py-[30px] border-b border-main-color px-2">
                <Link to="/" onClick={onClose}>
                  <img
                    src={obadaImage}
                    className="w-[60px] h-[60px] rounded-full object-cover"
                    alt=""
                  />
                </Link>
                <div className="">
                  <h4 className="text-white text-[17px]"> Obada Kahlous </h4>
                  <p className="text-[#d8d8d8] text-[15px]">
                    Front-End Developer
                  </p>
                </div>
              </div>
            )}
            <ul>
              {sidebarData.map((sideItem, key) => (
                <NavLink to={sideItem.url} key={`${key}-${sideItem.text}`}>
                  <li
                    onClick={onClose}
                    className="transition hover:bg-main-color cursor-pointer text-white px-[20px] flex items-center gap-2 py-[15px] mb-[0px] w-full">
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
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed top-0 left-0 w-full h-full z-[998] bg-[rgba(0,0,0,0.2)]"></div>
      )}
      <style>
        {`
           a.active {
            background-color: #ff8700;
            color: #fff;
            display: block;
            width: 100%;
          }
          @media(max-width : 1024px){
            div.sidebar{
              position: fixed;
              top: 0;
              left: ${isOpen ? "0" : "-200%"};
              width: 300px;
              height: 100%;
              z-index: 999;
              transition : 0.4s ease-in-out;
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};
