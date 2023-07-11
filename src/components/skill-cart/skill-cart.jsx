/* eslint-disable react/prop-types */
const SkillCart = ({ text, icon, level, reverse }) => {
  return (
    <div
      className={`transition duration-300 dark:hover:bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(125,125,125,0.1)] w-full rounded-lg flex items-start md:gap-4 gap-3 md:p-2 p-1 md:flex-row ${reverse} cursor-pointer`}>
      <div>{icon}</div>
      <div>
        <p className="uppercase dark:text-titleDarkColor text-titleLightColor md:text-[18px] text-[14px] md:tracking-wider tracking-tight">
          {text}
        </p>
        <span className="capitalize dark:text-paragraphDarkColor text-paragraphLightColor md:text-[16px] text-[12px] md:tracking-wider tracking-tight">
          {level}
        </span>
      </div>
    </div>
  );
};

export default SkillCart;
