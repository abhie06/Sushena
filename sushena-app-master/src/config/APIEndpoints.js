/* eslint-disable no-undef */
let API_END_POINT = "";

switch (process.env.REACT_APP_DEVELOPMENT_TYPE) {
  case "production":
    // Endpoint for Production website
    API_END_POINT = "";
    break;
  case "staging":
    // Endpoint for Staging website
    API_END_POINT = "";
    break;
  case "development":
    // Endpoint for Development website
    API_END_POINT = "";
    break;
  case "local":
    // Endpoint for Local
    API_END_POINT = "";
    break;
  default:
    // Default Endpoint
    API_END_POINT = "";
}

export default API_END_POINT;
