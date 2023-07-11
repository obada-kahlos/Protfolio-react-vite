import SkillCart from "../components/skill-cart/skill-cart";
import {
  SiRedux,
  SiReduxsaga,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiJquery,
  SiReactrouter,
  SiTypescript,
  SiReactquery,
} from "react-icons/si";
import { AiOutlineFullscreenExit, AiOutlineGithub } from "react-icons/ai";
import { VscJson } from "react-icons/vsc";
import { TbBrandNextjs } from "react-icons/tb";

const Skill = () => {
  const skillsData = [
    {
      icon: <SiHtml5 color="#e46212" size="40px" />,
      text: "html",
      level: "advanced",
      reverse: "flex-row",
    },
    {
      icon: <SiCss3 color="#10aed2" size="40px" />,
      text: "css",
      level: "advanced",
      reverse: "flex-row-reverse",
    },
    {
      icon: <SiJavascript color="#d2bb10" size="40px" />,
      text: "javascript",
      level: "advanced",
      reverse: "flex-row",
    },
    {
      icon: <SiTypescript color="#108bd2" size="40px" />,
      text: "typescript",
      level: "intermediate",
      reverse: "flex-row-reverse",
    },
    {
      icon: <SiBootstrap color="#5a10d2" size="40px" />,
      text: "bootstrap",
      level: "intermediate",
      reverse: "flex-row",
    },
    {
      icon: <SiTailwindcss color="#1bcede" size="40px" />,
      text: "Tailwindcss",
      level: "advanced",
      reverse: "flex-row-reverse",
    },
    {
      icon: <AiOutlineFullscreenExit color="#5a10d2" size="40px" />,
      text: "Responsive",
      level: "advanced",
      reverse: "flex-row",
    },
    {
      icon: <SiJquery color="#5a10d2" size="40px" />,
      text: "Jquery",
      level: "beginner",
      reverse: "flex-row-reverse",
    },
    {
      icon: (
        <AiOutlineGithub
          className="dark:text-titleDarkColor text-titleLightColor"
          size="40px"
        />
      ),
      text: "git/github",
      level: "intermediate",
      reverse: "flex-row",
    },
    {
      icon: <SiReact color="#10aed2" size="40px" />,
      text: "react js",
      level: "advanced",
      reverse: "flex-row-reverse",
    },
    {
      icon: <VscJson color="#f1cf0d" size="40px" />,
      text: "Restful API",
      level: "advanced",
      reverse: "flex-row",
    },
    {
      icon: <SiRedux color="#9810d2" size="40px" />,
      text: "redux",
      level: "intermediate",
      reverse: "flex-row-reverse",
    },
    {
      icon: <SiReduxsaga color="#9810d2" size="40px" />,
      text: "redux toolkit",
      level: "advanced",
      reverse: "flex-row",
    },
    {
      icon: <SiReduxsaga color="#9810d2" size="40px" />,
      text: "RTK Query",
      level: "advanced",
      reverse: "flex-row-reverse",
    },
    {
      icon: <SiReactrouter color="#d23d10" size="40px" />,
      text: "React Router",
      level: "advanced",
      reverse: "flex-row",
    },
    {
      icon: <SiReactquery color="#ee690a" size="40px" />,
      text: "react query",
      level: "beginner",
      reverse: "flex-row-reverse",
    },
    {
      icon: (
        <TbBrandNextjs
          className="dark:text-titleDarkColor text-titleLightColor"
          size="40px"
        />
      ),
      text: "Next js",
      level: "intermediate",
      reverse: "flex-row",
    },
  ];

  return (
    <div className="dark:bg-secondDarkBgColor bg-whiteLightBgColor min-h-screen px-[20px] w-full flex justify-center flex-col items-center text-[#fff]">
      <h1 className="dark:text-titleDarkColor text-titleLightColor md:text-[40px] my-[20px] text-[22px]">
        Front End Development<span className="text-main-color">.</span>
      </h1>
      <div className="grid grid-cols-12 gap-4 w-full">
        {skillsData?.map((skillItem, key) => (
          <div
            key={key}
            className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-6 my-[50px] w-full flex justify-center items-center">
            <SkillCart
              icon={skillItem.icon}
              text={skillItem.text}
              level={skillItem.level}
              reverse={skillItem.reverse}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
