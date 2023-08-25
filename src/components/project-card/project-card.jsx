/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import LightGallery from "lightgallery/react";
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
    <div className="grid grid-cols-12 gap-4 p-2 rounded-xl transition dark:hover:bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(125,125,125,0.12)] mb-[30px] ">
      <div
        className={`md:col-span-4 col-span-12 w-full h-full ${
          image?.length > 1 ? "flex gap-2" : ""
        }`}>
        {image?.map((item, key) => (
          <LightGallery speed={500} key={key}>
            <a href={item}>
              <LazyLoadImage
                src={item}
                alt={projectName}
                width={"100%"}
                effect={"blur"}
                className="border h-[250px] object-cover dark:border-[rgba(255,255,255,0.5)] rounded-md"
                delayTime={5000}
                threshold={5000}
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
          <h3 className="dark:text-titleDarkColor text-titleLightColor md:text-[34px] text-[20px] font-[400]">
            {projectName}
          </h3>
          <p className="dark:text-paragraphDarkColor text-paragraphLightColor">
            {" "}
            {description1}{" "}
          </p>
          <p className="dark:text-paragraphDarkColor text-paragraphLightColor">
            {" "}
            {description2}{" "}
          </p>
          {list?.length > 0 && (
            <h4 className="dark:text-paragraphDarkColor text-paragraphLightColor md:text-[24px] text-[18px]">
              About
            </h4>
          )}
          <ul style={{ listStyle: "inherit" }}>
            {list?.map((item, key) => (
              <li
                key={key}
                className="ml-[20px] dark:text-paragraphDarkColor text-paragraphLightColor">
                {item}
              </li>
            ))}
          </ul>
          <div>
            <h4 className="dark:text-paragraphDarkColor text-paragraphLightColor md:text-[24px] text-[18px]">
              Technology used
            </h4>
            <p className="dark:text-paragraphDarkColor text-paragraphLightColor">
              {language}
            </p>
          </div>
        </div>
        <div className="flex gap-[10px]">
          <a href={LiveDemo} target="_blank" rel="noreferrer">
            <button className="dark:text-titleDarkColor text-titleLightColor flex items-center justify-center gap-2 border dark:border-[rgba(255,255,255,0.4)] border-paragraphLightColor rounded py-[10px] px-[15px] text-[16px] uppercase">
              Live Demo
              <span className="flex justify-center items-center ml-[3px]">
                <AiOutlineGlobal />
              </span>
            </button>
          </a>
          {GitHubProject ? (
            <a href={GitHubProject} target="_blank" rel="noreferrer">
              <button className="dark:text-titleDarkColor text-titleLightColor flex items-center justify-center gap-2 border dark:border-[rgba(255,255,255,0.4)] border-paragraphLightColor rounded py-[10px] px-[15px] text-[16px] uppercase">
                Github
                <span className="flex justify-center items-center ml-[3px]">
                  <AiFillGithub />
                </span>
              </button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
