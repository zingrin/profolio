import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";import Projects from "../components/ProjectsShowcase";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {path: "/skills",element:<Skills />},
    {path:"/projects", element: <Projects />},
    {path:"/contact", element: <Contact/>}
     
    ],
  },
]);

export default router;
