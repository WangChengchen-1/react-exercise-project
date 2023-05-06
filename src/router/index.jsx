import { Navigate, useRoutes } from "react-router-dom";
import Home from "@/pages/home";
import Login from "@/pages/login";

const GetRoutes = () => {
  const routes = useRoutes([
    {
      path:'/',
      element:<Navigate to='/home'/>
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return routes;
};
export default GetRoutes;
