import { ProjectCard } from "../components/project-card/project-card";

import fylo from "/public/image/fylo.png";
import AnimeClub from "/public/image/Anime-Club.png";
import bookAdmin from "/public/image/admin-book-image.png";
import bookClient from "/public/image/client-book-image.png";

import mdcin1 from "/public/image/mdcin1.png";
import mdcin2 from "/public/image/mdcin2.png";
import mdcin3 from "/public/image/mdcin3.png";
import mdcin4 from "/public/image/mdcin4.png";

import game1 from "/image/game1.png";
import game2 from "/image/game2.png";
import game3 from "/image/game3.png";
import game4 from "/image/game4.png";
import game5 from "/image/game5.png";
import game6 from "/image/game6.png";

const Project = () => {
  const ProjectsData = [
    {
      image: [mdcin1, mdcin2, mdcin3, mdcin4],
      projectName: "Mdcin",
      description1:
        "Mdcin is a social network application for the doctor's class only developed by Nextinuous company. I developed most of the services and pages it contains from the front-end side",
      LiveDemo: "https://test.mdcin.com/",
      list: [
        "The App is by invitation only, but for now you can use this link to make sign up (https://test.mdcin.com/signup)",
      ],
      language:
        "HTML - CSS - ReactJs - AstroJs - React Select - Formik - Yup Validation - TailwindCSS - Redux Toolkit - RTK Query - React Router Dom ",
    },
    {
      image: [bookAdmin],
      projectName: "Book Admin App (In Progress)",
      description1:
        "The super admin can control the entire site by adding new admins, adding books, publishers, and other things.",
      description2:
        " The different between admin and super admin in that the admin cannot add an admins.",
      LiveDemo: "https://e-book-admin-react.vercel.app/",
      list: [
        "Authentication and Authorization using JWT token.",
        "Super Admin to manage the entire site.",
        "admin to add and manage books and user...",
        "Responsive.",
      ],
      language:
        "HTML - CSS - ReactJs - Formik - Yup Validation - TailwindCSS - Redux Toolkit - RTK Query - React Router Dom",
      GitHubProject: "https://github.com/obada-kahlos/e-book-admin-react",
    },
    {
      projectName: "Book Client App (In Progress)",
      image: [bookClient],
      LiveDemo: "https://e-book-client-next-js.vercel.app/",
      description1:
        "A book site that enables users to browse, buy and download books.",
      list: [
        "Authentication and Authorization by token.",
        "Display books by book type, the ability to search for a specific book, And see book information.",
        "Add and delete books to and from the cart.",
        "Add and remove book to and from LocalStorage to display books in wish list.",
        "Responsive.",
      ],
      language:
        "HTML - CSS - ReactJs - NextJs - TailwindCSS (DaisyUi) - Redux Toolkit - RTK Query - Formik - Yup Validation",
      GitHubProject: "https://github.com/obada-kahlos/e-book-client-nextJS",
    },
    {
      image: [game1, game2, game3, game4, game5, game6],
      projectName: "Game App",
      description1: "Web site for games, i used Apis from Rapidapi",
      list: [
        "View game categories and view game details.",
        "Fake login and create a fake account, 404 page if the user entered wrong URL and page for pricing and full responsive.",
        "Responsive.",
        "Api I used from https://rapidapi.com",
      ],
      language:
        "HTML - CSS - ReactJs - styled component - TailwindCSS - Redux Toolkit - React Router Dom",
      LiveDemo: "https://game-cky5i1kvf-obada-kahlos.vercel.app/",
      GitHubProject: "https://github.com/Obadaa-Kahlous/gameApp",
    },
    {
      image: [fylo],
      projectName: "Fylo",
      description1:
        "A challenge from Front End Monitor, and I added some extra pages.",
      language: "HTML - CSS - ReactJs - styled component - React Router Dom -",
      LiveDemo: "https://fylo-theta-jet.vercel.app/",
      GitHubProject: "https://github.com/Obadaa-Kahlous/",
    },
    {
      image: [AnimeClub],
      projectName: "Anime Club",
      description1: "web design training. ",
      language: "Html - Css(Sass) - Javascript",
      LiveDemo: "https://anime-club-gold.vercel.app/",
      GitHubProject: "https://github.com/Obadaa-Kahlous/Anime-Club",
    },
  ];
  return (
    <div className="dark:bg-secondDarkBgColor bg-whiteLightBgColor min-h-screen md:px-[20px] w-full flex justify-center flex-col items-center text-[#fff]">
      <h1 className="dark:text-titleDarkColor text-titleLightColor md:text-[40px] my-[20px] text-[22px]">
        My projects<span className="text-main-color">.</span>
      </h1>
      <div className="w-full mb-[30px]">
        {ProjectsData.map((item, key) => (
          <>
            <ProjectCard
              key={key}
              image={item.image}
              language={item.language}
              projectName={item.projectName}
              description1={item.description1}
              description2={item.description2}
              LiveDemo={item.LiveDemo}
              GitHubProject={item.GitHubProject}
              list={item.list}
            />
            {/* <Divider /> */}
          </>
        ))}
      </div>
    </div>
  );
};

export default Project;
