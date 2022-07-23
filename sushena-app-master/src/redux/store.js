import { configureStore } from "@reduxjs/toolkit";

import toasterReducer from "./toaster";

const store = configureStore({
  reducer: {
    toaster: toasterReducer,
  },
});

export default store;
