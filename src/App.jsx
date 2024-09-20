import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import all pages dynamically
const pages = {
  LandingPage: React.lazy(() => import('./pages/LandingPage')),
  JobSearch: React.lazy(() => import('./pages/JobSearch')),
  Single_Job: React.lazy(() => import('./pages/Single_Job')),
  Browse_Emp: React.lazy(() => import('./pages/Browse_Emp')),
  Single_emp: React.lazy(() => import('./pages/Single_emp')),
  Browse_Candidates: React.lazy(() => import('./pages/Browse_Candidates')),
  Dashboard: React.lazy(() => import('./pages/Dashboard')),
  Applied_Jobs: React.lazy(() => import('./pages/Applied_Jobs')),
  Favourite_Jobs: React.lazy(() => import('./pages/Favourite_Jobs')),
  Settings: React.lazy(() => import('./pages/Settings')),
  Setting_Profile: React.lazy(() => import('./pages/Setting_Profile')),
  Setting_Account: React.lazy(() => import('./pages/Setting_Account')),
};

const router = createBrowserRouter([
  {
    children: [
      { path: "/", element: <pages.LandingPage /> },
      { path: "/jobs", element: <pages.JobSearch /> },
      { path: "/single_job", element: <pages.Single_Job /> },
      { path: "/browse_emp", element: <pages.Browse_Emp /> },
      { path: "/single_emp", element: <pages.Single_emp /> },
      { path: "/browse_cands", element: <pages.Browse_Candidates /> },
      { path: "/dashboard", element: <pages.Dashboard /> },
      { path: "/dashboard/applied_jobs", element: <pages.Applied_Jobs /> },
      { path: "/dashboard/favourite_jobs", element: <pages.Favourite_Jobs /> },
      { path: "/settings", element: <pages.Settings /> },
      { path: "/settings/profile", element: <pages.Setting_Profile /> },
      { path: "/settings/account", element: <pages.Setting_Account /> },
    ],
  },
]);

export default function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}
