import {
  createBrowserRouter,
  RouterProvider as RRouterProvider,
} from "react-router-dom";
import { HomeLayout, HomePage, NotFoundPage } from "~/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export const RouterProvider = () => {
  return <RRouterProvider router={router} />;
};
