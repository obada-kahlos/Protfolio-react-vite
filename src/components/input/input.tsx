import React from "react";
import { Field } from "formik";

const Input = ({ className, placeholder, label, name }) => {
  return (
    <React.Fragment>
      <div className="mt-[15px]">
        <label className="dark:text-paragraphDarkColor text-paragraphLightColor">
          {label}
        </label>
      </div>
      <div className="relative">
        <Field
          type="text"
          className={`${className} border-b-[3px] dark:border-titleDarkColor dark:text-titleDarkColor border-titleLightColor text-titleLightColor`}
          placeholder={placeholder}
          name={name}
        />
        <div className="input-border"></div>
      </div>
      <style>
        {`
                input.${className}{
                    width : 100%;
                    font-size : 18px;
                    padding : 10px 10px 10px 10px;
                    background-color : transparent;
                }
                div.input-border{
                    position : relative;
                }
                div.input-border:after{
                    content: "";
                    position : absolute;
                    bottom : 0;
                    left: 0;
                    width : 0%;
                    height : 3px;
                    background-color : #ff8700;
                    transition : 0.3s ease-in
                }
                input.${className}:focus + div.input-border:after {
                    width: 100%;
                }
            `}
      </style>
    </React.Fragment>
  );
};

export default Input;
