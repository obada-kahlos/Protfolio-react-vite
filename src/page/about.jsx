import LightGallery from "lightgallery/react";
import obadaImage from "/public/image/obada.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-secondDarkBgColor min-h-screen px-[20px] w-full flex justify-center flex-col items-center text-[#fff]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}>
        <LightGallery speed={500}>
          <a href={obadaImage}>
            <img
              src={obadaImage}
              className="w-[180px] h-[180px] rounded-full object-cover border-[2px] border-main-color"
              alt=""
            />
          </a>
        </LightGallery>
      </motion.div>

      <div className="flex justify-center items-center flex-col gap-1 mt-[20px]">
        <p className="text-main-color md:text-[32px] text-[18px]">
          HELLO, WORLD!
        </p>
        <p className="text-withe md:text-[50px] text-[24px] font-[700]">
          I<span className="text-main-color">&apos;</span>m Obada Kahlous
          <span className="text-main-color">.</span>
        </p>
        <p className="text-[#cecece]">FRONT-END DEVELOPER</p>
        <p className="text-[##fff] md:text-[18px] text-[15px] md:w-10/12 w-12/12 text-center mt-[10px]">
          Front-End Developer with +2 year of experience working with React.Js |
          Next.Js, excellent experience in problem-solving, self-learning and
          working time management, the ability to adapt to different work
          environments and good communication with the team work
        </p>
      </div>
    </div>
  );
};

export default About;
