/* eslint-disable react/prop-types */
const SkillCart = ({ text, icon, level }) => {
  return (
    <div className="transition duration-300 hover:bg-[rgba(0,0,0,0.3)] w-full rounded-lg flex items-start gap-4 p-2 cursor-pointer">
      <div>{icon}</div>
      <div>
        <p className="uppercase text-[#fff] text-[18px] tracking-wider">
          {text}
        </p>
        <span className="capitalize text-[#ffffff90] text-[16px] tracking-wider">
          {level}
        </span>
      </div>
    </div>
  );
};

export default SkillCart;
