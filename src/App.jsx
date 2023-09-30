import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashoboard"
import Requests from "./pages/reuqests/Requests";

function App() {
  let routes = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/requests",
      element: <Requests />,
    },
  ];

  return (
    <Routes>
      {routes.map((index) => {
        return (
          <Route key={index.path} path={index.path} element={index.element} />
        );
      })}
    </Routes>
  );
}

export default App;
