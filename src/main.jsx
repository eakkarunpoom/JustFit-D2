import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '../src/pages/Homepage/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import WorkOutVideo from '../src/pages/WorkOut/WorkOutVideo';
import Login from '../src/pages/LoginPage/LoginPage';
import Signup from '../src/pages/SignUpPage/SignUpPage';
import Dashboard from '../src/pages/DashBoardPage/DashBoardPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/workout-videos",
    element: <WorkOutVideo />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
