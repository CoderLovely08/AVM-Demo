import { configureStore } from "@reduxjs/toolkit";
import lightsReducer from "./slices/lights.slice";

export const store = configureStore({
  reducer: {
    lights: lightsReducer,
  },
});