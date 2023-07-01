/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import LightGallery from "lightgallery/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AiOutlineGlobal, AiFillGithub } from "react-icons/ai";

export const ProjectCard = ({
  image,
  projectName,
  description1,
  description2,
  list,
  LiveDemo,
  GitHubProject,
  language,
}) => {
  return (
    <div className="grid grid-cols-12 gap-4 p-2 rounded-xl transition hover:bg-[rgba(0,0,0,0.4)] mb-[30px] ">
      <div className="md:col-span-4 col-span-12 w-full h-full">
        {image?.map((item, key) => (
          <LightGallery
            key={key}
            speed={500}
            className="border h-[250px] object-cover border-[rgba(255,255,255,0.5)] rounded-md">
            <a href={item}>
              <LazyLoadImage
                src={item}
                alt={projectName}
                width={"100%"}
                effect={"blur"}
                delayTime={1000}
                threshold={1000}
                placeholderSrc={item}
              />
            </a>
          </LightGallery>
        ))}
        {/* <LazyLoadImage>
          <img src={image} alt={projectName} className="w-full" />
        </LazyLoadImage> */}
      </div>
      <div className="md:col-span-8 col-span-12 w-full h-full flex justify-between items-start flex-col gap-4">
        <div>
          <h3 className="text-[#fff] md:text-[34px] text-[20px] font-[400]">
            {projectName}
          </h3>
          <p className="text-[rgba(255,255,255,0.7)]"> {description1} </p>
          <p className="text-[rgba(255,255,255,0.7)]"> {description2} </p>
          {list?.length > 0 && (
            <h4 className="text-[rgba(255,255,255,0.8)] md:text-[24px] text-[18px]">
              About
            </h4>
          )}
          <ul style={{ listStyle: "inherit" }}>
            {list?.map((item, key) => (
              <li key={key} className="ml-[20px] text-[rgba(255,255,255,0.7)]">
                {item}
              </li>
            ))}
          </ul>
          <div>
            <h4 className="text-[rgba(255,255,255,0.8)] md:text-[24px] text-[18px]">
              Technology used
            </h4>
            <p className="text-[rgba(255,255,255,0.7)]">{language}</p>
          </div>
        </div>
        <div className="flex gap-[10px]">
          <a href={LiveDemo} target="_blank" rel="noreferrer">
            <button className="flex items-center justify-center gap-2 border border-[rgba(255,255,255,0.4)] rounded py-[10px] px-[15px] text-[16px] uppercase">
              Live Demo
              <span className="flex justify-center items-center ml-[3px]">
                <AiOutlineGlobal />
              </span>
            </button>
          </a>
          <a href={GitHubProject} target="_blank" rel="noreferrer">
            <button className="flex items-center justify-center gap-2 border border-[rgba(255,255,255,0.4)] rounded py-[10px] px-[15px] text-[16px] uppercase">
              Github
              <span className="flex justify-center items-center ml-[3px]">
                <AiFillGithub />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
