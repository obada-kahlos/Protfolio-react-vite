import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <React.Fragment>
      <button className="button" type="submit" onClick={onClick}>
        {text}
      </button>
      <style>
        {`
           .button {
            width: 240px;
            height: 65px;
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2.5px;
            font-weight: 500;
            color: #ffffff90;
            background-color: rgba(255, 135, 0, 0.8);
            border: none;
            border-radius: 65px;
            box-shadow: 0px 8px 15px rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease 0s;
            cursor: pointer;
            outline: none;
          }
          @media(max-width : 768px){
            .button {
              width: 180px;
              height: 55px;
              font-family: 'Roboto', sans-serif;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1.5px;
              font-weight: 500;
              color: #ffffff60;
              background-color: rgba(255, 135, 0, 0.8);
              border: none;
              border-radius: 55px;
              box-shadow: 0px 8px 15px rgba(255, 255, 255, 0.1);
              transition: all 0.3s ease 0s;
              cursor: pointer;
              outline: none;
            }
          }
          .button:hover {
            background-color: rgb(255, 135, 0);
            box-shadow: 0px 15px 20px rgba(255, 135, 0, 0.4);
            color: #fff;
            transform: translateY(-3px);
          }
          `}
      </style>
    </React.Fragment>
  );
};

export default Button;
