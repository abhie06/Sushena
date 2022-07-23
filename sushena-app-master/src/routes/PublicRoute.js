// The commented out routes are not being used for now and the associated components are marked as Deprecated ( These are not to be deleted )

import DonationForm from "pages/DonationForm";
import Home from "pages/Home";

// Public Routes
// Routes for Authenticating Users
const publicRoutes = [
  // Authentication
  { path: "/donationForm", exact: true, component: DonationForm },
  { path: "/", exact: true, component: Home },
];

export { publicRoutes };
