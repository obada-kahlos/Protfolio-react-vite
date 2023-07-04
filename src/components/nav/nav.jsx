import React, { useState, useEffect } from "react";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(localStorage.theme === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  console.log({ darkMode });

  return (
    <React.Fragment>
      <div className="sticky z-[9999] flex items-center justify-end h-[54px] py-[10px] px-[20px] top-0 right-0 w-full dark:bg-firstDarkBgColor bg-sidebarLightBgColor">
        {/* <button className="text-black">
          Toggle {darkMode ? "Light Mode" : "Dark Mode"}
        </button> */}
        {/* <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {darkMode ? "Light" : "Dark"}
          </span>
        </label> */}

        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onClick={() => setDarkMode(!darkMode)}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <style>
        {`
            .switch {
              position: relative;
              display: inline-block;
              width: 60px;
              height: 28px;
            }
            
            .switch input { 
              opacity: 0;
              width: 0;
              height: 0;
            }
            
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #ccc;
              -webkit-transition: .4s;
              transition: .4s;
            }
            
            .slider:before {
              position: absolute;
              content: "";
              height: 20px;
              width: 20px;
              left: 8px;
              bottom: 4px;
              background-color: white;
              -webkit-transition: .4s;
              transition: .4s;
            }
            
            input:checked + .slider {
              background-color: #2196F3;
            }
            
            input:focus + .slider {
              box-shadow: 0 0 1px #2196F3;
            }
            
            input:checked + .slider:before {
              -webkit-transform: translateX(26px);
              -ms-transform: translateX(26px);
              transform: translateX(26px);
            }
            
            /* Rounded sliders */
            .slider.round {
              border-radius: 34px;
            }
            
            .slider.round:before {
              border-radius: 50%;
            }
          `}
      </style>
    </React.Fragment>
  );
};

export default Nav;
