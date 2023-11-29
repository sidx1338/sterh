import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter, Route,
    RouterProvider,
} from "react-router-dom";
//import App from './App.jsx'
import './fonts/icon-font/style.css'
import './index.scss'


import {Advantages} from "./Pages/Advantages/Advantages.jsx";
import {CompInfo} from "./Pages/CompInfo/CompInfo.jsx";
import {Contacts} from "./Pages/Contacts/Contacts.jsx";
import {Objects} from "./Pages/Objects/Objects.jsx";
import {Services} from "./Pages/Services/Services.jsx";
import ObjectInfo from "./components/ObjectInfo/ObjectInfo.jsx";


const router = createBrowserRouter([
    {
        path: "/sterh",
        element: <Contacts/>
    },
    {
        path: "/sterh/advantages",
        element: <Advantages/>
    },
    {
        path: "/sterh/info",
        element: <CompInfo/>
    },
    {
        path: "/sterh/contacts",
        element: <Contacts/>
    },
    {
        path: "/sterh/objects",
        element: <Objects/>
    },
    {
        path: "/sterh/services",
        element: <Services/>
    },
    {
        path: "/sterh/objects/:title",
        element: <ObjectInfo/>
    }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
