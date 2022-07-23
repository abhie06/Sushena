import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

import PortalLayout from "layout/PortalLayout";

// Wrapper for Private Routes
const AuthenticatedRedirects = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!localStorage.getItem("sushenaToken")) {
          return (
            <Redirect
              to={{
                pathname: "/auth/signIn",
              }}
            />
          );
        }

        return (
          <PortalLayout>
            <Component {...props} />
          </PortalLayout>
        );
      }}
    />
  );
};

export default withRouter(AuthenticatedRedirects);
