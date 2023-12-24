import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage } from './page/about.jsx';
import { CareersPage } from './page/careers.jsx';
import { ContactPage } from './page/contact.jsx';
import { HomePage } from './page/home.jsx';
import { IdeasPage } from './page/ideas.jsx';
import { ServicePage } from './page/service.jsx';
import { Header } from './component/Header.jsx';
import { WorkPage } from './page/work.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/work",
    element: <WorkPage></WorkPage>,
  },
  {
    path: "/careers",
    element: <CareersPage/>,
  },
  {
    path: "/contact",
    element: <ContactPage></ContactPage>,
  },
  {
    path: "/home",
    element: <HomePage></HomePage>,
  },
  {
    path: "/ideas",
    element: <IdeasPage></IdeasPage>,
  },
  {
    path: "/services",
    element: <ServicePage></ServicePage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
