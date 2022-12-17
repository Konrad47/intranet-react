import { configureStore } from "@reduxjs/toolkit";
import { projectReducer } from "../pages/Projects/projectSlice";
export const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
