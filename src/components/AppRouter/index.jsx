import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";

import { routes } from "./../../routes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}

        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
