/* eslint-disable react/prop-types */
const SkillCart = ({ text, icon, level }) => {
  return (
    <div className="transition duration-300 dark:hover:bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(125,125,125,0.1)] w-full rounded-lg flex items-start gap-4 p-2 cursor-pointer">
      <div>{icon}</div>
      <div>
        <p className="uppercase dark:text-titleDarkColor text-titleLightColor text-[18px] tracking-wider">
          {text}
        </p>
        <span className="capitalize dark:text-paragraphDarkColor text-paragraphLightColor text-[16px] tracking-wider">
          {level}
        </span>
      </div>
    </div>
  );
};

export default SkillCart;
