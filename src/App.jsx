import React from 'react'
import JobSearch from './pages/JobSearch'
import LandingPage from './pages/LandingPage';
import { Single_Job } from './pages/Single_Job';
import Browse_Emp from './pages/Browse_Emp';
import Single_emp from './pages/Single_emp';
import Browse_Candidates from './pages/Browse_Candidates';
import Dashboard from './pages/Dashboard';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applied_Jobs from './pages/Applied_Jobs';
import Favourite_Jobs from './pages/Favourite_Jobs';
import Settings from './pages/Settings';
import Setting_Profile from './pages/Setting_Profile';
import Setting_Account from './pages/Setting_Account';

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/jobs",
        element: <JobSearch />,
      },
      {
        path: "/single_job",
        element: <Single_Job />,
      },
      {
        path: "/browse_emp",
        element: <Browse_Emp />,
      },
      {
        path: "/single_emp",
        element: <Single_emp />,
      },
      {
        path: "/browse_cands",
        element: <Browse_Candidates />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/applied_jobs",
        element: <Applied_Jobs />,
      },
      {
        path: "/dashboard/favourite_jobs",
        element: <Favourite_Jobs />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/settings/profile",
        element: <Setting_Profile />,
      },
      {
        path: "/settings/account",
        element: <Setting_Account />,
      },
    ],
  },
]);
export default function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}
