import { useState, useEffect } from "react";

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
    <div className="sticky z-[9999] flex items-center justify-end h-[54px] py-[10px] px-[20px] top-0 right-0 w-full dark:bg-firstDarkBgColor bg-sidebarLightBgColor">
      <button onClick={() => setDarkMode(!darkMode)} className="text-black">
        Toggle {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Nav;
