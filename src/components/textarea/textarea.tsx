import React from "react";
import { Field } from "formik";

const Textarea = ({ className, placeholder, label, name }) => {
  return (
    <React.Fragment>
      <div className="mt-[15px]">
        <label className="dark:text-paragraphDarkColor text-paragraphLightColor">
          {label}
        </label>
      </div>
      <div className="relative">
        <Field
          as={"textarea"}
          className={`${className} border-b-[3px] dark:border-titleDarkColor dark:text-titleDarkColor border-titleLightColor text-titleLightColor`}
          rows={5}
          placeholder={placeholder}
          name={name}
        />
        <div className="textarea-border"></div>
      </div>
      <style>
        {`
            textarea.${className}{
                width : 100%;
                font-size : 18px;
                padding : 10px 10px 10px 10px;
                background-color : transparent;
                resize : none;
            }
            div.textarea-border{
                position : relative;
            }
            div.textarea-border:after{
                content: "";
                position : absolute;
                bottom : 5px;
                left: 0;
                width : 0%;
                height : 3px;
                background-color : #ff8700;
                transition : 0.3s ease-in
            }
            textarea.${className}:focus + div.textarea-border:after {
                width: 100%;
            }
            `}
      </style>
    </React.Fragment>
  );
};

export default Textarea;
