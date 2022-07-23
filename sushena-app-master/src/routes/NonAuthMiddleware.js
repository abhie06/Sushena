import Footer from "layout/Footer";
import Navigation from "layout/Navigation/AppTopNav";
import { Route } from "react-router-dom";

// Wrapper for Public Routes
function NonAuthMiddleware({ component: Component }) {
  return (
    <Route
      render={(props) => {
        return (
          <>
            <Navigation />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <Component {...props} />
            </div>
            <Footer />
          </>
        );
      }}
    />
  );
}

export default NonAuthMiddleware;
