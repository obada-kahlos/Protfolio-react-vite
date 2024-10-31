/* eslint-disable react/prop-types */
import { IconButton } from "@mui/material";
import { useState } from "react";

import { MdClose, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { LazyLoadImage } from "react-lazy-load-image-component";

export const ImgSlider = (props) => {
  const { images } = props;
  const [isImgPopupOpen, setIsImgPopupOpen] = useState(false);
  const [curImgIndex, setCurImgIndex] = useState(0);

  const handleClickOnImg = (index) => {
    setIsImgPopupOpen(true);
    setCurImgIndex(index);
  };

  const handelGoFor = () => {
    setCurImgIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handelGoBack = () => {
    setCurImgIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const additionalImg = images.length - 3;

  return (
    <div
      className={`w-full grid grid-cols-12 gap-2 ${
        isImgPopupOpen ? "fixed z-[999999999999999999999999999999999999] " : ""
      }`}
    >
      {images.slice(0, 3).map((img, index) => (
        <div
          key={index}
          className={`relative ${
            index === 0
              ? "col-span-12"
              : index === 1 && images.length === 2
              ? "col-span-12"
              : "col-span-6"
          } bg-white ${
            images.length === 1 ? "h-96" : "h-48"
          } overflow-hidden cursor-pointer ${
            index === 2 && images.length > 3
              ? `after:w-full after:block after:h-full after:absolute after:top-0 after:left-0 after:bg-black after:opacity-[0.9]`
              : ""
          }`}
          onClick={() => handleClickOnImg(index)}
        >
          <LazyLoadImage
            src={img}
            alt={""}
            effect={"blur"}
            className="w-full h-full object-cover"
            delayTime={5000}
            threshold={5000}
            placeholderSrc={img}
          />
          {index === 2 && !isImgPopupOpen && images.length > 3 && (
            <span className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-white text-[44px] z-[1]">
              +{additionalImg}
            </span>
          )}
        </div>
      ))}
      {isImgPopupOpen && (
        <div className="fixed top-0 left-0 h-[100vh] w-[100vw] bg-black flex justify-center">
          <span
            className="absolute border border-main-color top-8 right-16 w-12 h-12 bg-[#191919] rounded-full text-[#fff] cursor-pointer z-[5] flex justify-center items-center text-4"
            onClick={() => setIsImgPopupOpen(false)}
          >
            <IconButton>
              <MdClose color="#fff" />
            </IconButton>
          </span>
          {images.length > 1 && (
            <>
              <span
                className="absolute top-1/2 -translate-y-1/2 left-[20px] sm:left-[110px] cursor-pointer z-[5] bg-[#191919] text-white w-12 h-12 flex items-center justify-center text-[0.875rem] rounded-full"
                onClick={handelGoBack}
              >
                <IconButton>
                  <MdOutlineKeyboardArrowLeft color="#fff" />
                </IconButton>
              </span>
              <span
                className="absolute top-1/2 -translate-y-1/2 right-[20px] sm:right-[110px] cursor-pointer z-[5] bg-[#191919] text-white w-12 h-12 flex items-center justify-center text-[0.875rem] rounded-full"
                onClick={handelGoFor}
              >
                <IconButton>
                  <MdOutlineKeyboardArrowRight color="#fff" />
                </IconButton>
              </span>
            </>
          )}
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className={`w-full sm:w-1/2 h-1/2 lg:h-full top-1/2 lg:top-0 translate-y-[50%] lg:translate-y-0 object-contain ${
                index === curImgIndex ? "block" : "hidden"
              } z-[2]`}
              style={{
                transitionDelay: "200ms",
                animationName: "imgAppear",
                animationDuration: "1s",
              }}
            />
          ))}
        </div>
      )}
      <style>
        {`
          @keyframes imgAppear {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};
