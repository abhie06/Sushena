import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";

import { Toaster } from "react-hot-toast";

// Redux
import { Provider } from "react-redux";
import store from "redux/store";

// Routes
import { publicRoutes } from "routes/PublicRoute";
import { privateRoutes } from "routes/PrivateRoute";

// Components
import NonAuthMiddleware from "routes/NonAuthMiddleware";
import AuthenticatedRedirects from "routes/AuthenticatedRedirects";
import Navigation from "layout/Navigation/AppTopNav";
import Footer from "layout/Footer";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Toaster position="top-right" />
        <div className="min-h-screen bg-white">
          <Router>
            <Switch>
              {publicRoutes.map((route, idx) => (
                <NonAuthMiddleware
                  path={route.path}
                  component={route.component}
                  key={idx}
                />
              ))}
            </Switch>
          </Router>
        </div>
      </Provider>
    </React.Fragment>
  );
}

export default App;
