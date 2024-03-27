import { Route, Routes, Navigate } from "react-router-dom";
import { RoutesList, routesName } from "./RoutesList";
import { AppContext } from "../context/app";
import { useContext } from "react";
import { ContextProps } from "../context/interface";

const Routing = () => {
  const { user, isSignedIn } = useContext(AppContext) as ContextProps;

  return (
    <Routes>
      {RoutesList.map((route, i) => {
        if (route.valid_role === "all" || route.valid_role === user?.role) {
          if (route.link === routesName.signin) {
            return (
              <Route
                key={route.id}
                path={route.link}
                element={route.component}
              />
            );
          } else {
            return (
              <Route
                path={route.link}
                key={route.id}
                element={
                  isSignedIn || route.link === routesName.signup ? (
                    route.component
                  ) : (
                    <Navigate
                      to={routesName.signin}
                      replace
                      state={{
                        from:
                          route.link === routesName.default
                            ? routesName.dashboard
                            : route.link,
                      }}
                    />
                  )
                }
              />
            );
          }
        }
      })}
    </Routes>
  );
};

export default Routing;
