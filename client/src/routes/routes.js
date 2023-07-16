import { Register, Login } from "../components";
import NotFound from "../components/NotFound";
import Home from "../components/Home";

const Routes = [
  { exact: true, path: "/", element: <Home/> },
  { exact: true, path: "/login", element: <Login/> },
  { exact: true, path: "/register", element: <Register/> },
  { exact: true, path: "*", element: <NotFound/> },
];

export default Routes;
