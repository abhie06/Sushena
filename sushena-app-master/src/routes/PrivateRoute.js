// The commented out routes are not being used for now and the associated components are marked as Deprecated ( These are not to be deleted )
import React from "react";
import { Redirect } from "react-router-dom";

// Components

// Authenticated Paths

// Array of routes only a logged in user can access
// The menuTab key should have the value for the tab that needs to be highlighted when the user is on that page
const privateRoutes = [
  // {
  //   path: "/",
  //   exact: true,
  //   component: () =>
  //     localStorage.getItem("sushenaToken") ? (
  //       <Redirect to="/dashboard" />
  //     ) : (
  //       <Redirect to="/auth/signIn" />
  //     ),
  // },
];

export { privateRoutes };
