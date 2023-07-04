import React from "react";
import LightGallery from "lightgallery/react";
import obadaImage from "/public/image/obada.jpg";
// import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaFacebookF, FaWhatsapp, FaGithubAlt } from "react-icons/fa";

const About = () => {
  return (
    <React.Fragment>
      <div className="dark:bg-secondDarkBgColor bg-whiteLightBgColor min-h-screen md:px-[20px] w-full flex justify-center flex-col items-center text-[#fff]">
        {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}> */}
        <LightGallery speed={500}>
          <a href={obadaImage}>
            <LazyLoadImage
              src={obadaImage}
              alt={"obada kahlous"}
              width={"100%"}
              effect={"blur"}
              className="w-[180px] h-[180px] rounded-full object-cover border-[2px] border-main-color"
              delayTime={3000}
              threshold={3000}
              placeholderSrc={obadaImage}
            />
          </a>
        </LightGallery>
        {/* </motion.div> */}

        <div className="flex justify-center items-center flex-col gap-1 mt-[20px]">
          <p className="text-main-color md:text-[32px] text-[18px]">
            HELLO, WORLD!
          </p>
          <p className="dark:text-white text-titleLightColor md:text-[50px] text-[24px] font-[700]">
            I<span className="text-main-color">&apos;</span>m Obada Kahlous
            <span className="text-main-color">.</span>
          </p>
          <p className="dark:text-paragraphDarkColor text-paragraphLightColor">
            FRONT-END DEVELOPER
          </p>
          <p className="dark:text-paragraphDarkColor text-paragraphLightColor md:text-[18px] text-[14px] md:w-10/12 w-12/12 text-center mt-[10px]">
            Front-End Developer with +2 year of experience working with React.Js
            | Next.Js, excellent experience in problem-solving, self-learning
            and working time management, the ability to adapt to different work
            environments and good communication with the team work
          </p>
          <div className="w-full flex justify-center items-center md:gap-10 gap-2 py-[30px] px-2">
            <span className="w-[30px] h-[30px] cursor-pointer rounded-full flex justify-center items-center dark:text-[#cecece] text-paragraphLightColor border dark:border-whiteLightBgColor border-titleLightColor">
              <FaFacebookF />
            </span>
            <span className="w-[30px] h-[30px] cursor-pointer rounded-full flex justify-center items-center dark:text-[#cecece] text-paragraphLightColor border dark:border-whiteLightBgColor border-titleLightColor">
              <FaWhatsapp />
            </span>
            <span className="w-[30px] h-[30px] cursor-pointer rounded-full flex justify-center items-center dark:text-[#cecece] text-paragraphLightColor border dark:border-whiteLightBgColor border-titleLightColor">
              <FaGithubAlt />
            </span>
          </div>
        </div>
      </div>
      <div className="fixed top-[-120px] blur-2xl right-[-120px] w-[300px] h-[300px] rounded-full bg-[#ff870020]"></div>
    </React.Fragment>
  );
};

export default About;
