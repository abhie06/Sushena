import axios from "axios";
import API_END_POINT from "config/APIEndpoints";

// Create Headers for APIs
export const getHeader = () => {
  return {
    headers: {
      "x-access-token": `${localStorage.getItem("sushenaToken")}`,
      "Content-Type": "application/json",
    },
  };
};

export const getMultipartHeader = () => {
  return {
    headers: {
      "x-access-token": `${localStorage.getItem("sushenaToken")}`,
      "content-type": "multipart/form-data",
    },
  };
};

export const instance = axios.create({
  baseURL: API_END_POINT,
});
