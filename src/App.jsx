import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  let routes = [
    {
      path: "/login",
      element: <Login />,
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
