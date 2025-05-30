import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Components/Home";
import MainLayout from "../Components/layout/MainLayout";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import ContactMe from "../Components/ContactMe";
import Education from "../Components/Education";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
            path: "aboutMe",
            element: <AboutMe></AboutMe>
        },
        {
            path: "skills",
            element: <Skills></Skills>
        },
        {
            path: "projects",
            element: <Projects></Projects>
        },
        {
            path: "contact",
            element: <ContactMe></ContactMe>
        },
        {
           path: "education",
           element: <Education></Education>
        }
      ]
    },
  ]);

export default router;