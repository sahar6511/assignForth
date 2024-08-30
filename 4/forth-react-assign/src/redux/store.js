import { configureStore } from "@reduxjs/toolkit";
import { studentsApi } from "./services/studentsApi";
import { teachersApi } from "./services/teachersApi";
import { majorsApi } from "./services/majorsApi";
import {corsesApi} from "./services/coursesApi";
import{courseSelectionApi} from "./services/courseSelectionApi"

const customStore = configureStore({
  reducer: {
    [studentsApi.reducerPath]: studentsApi.reducer,
    [teachersApi.reducerPath]: teachersApi.reducer,
    [majorsApi.reducerPath]:majorsApi.reducer,
    [corsesApi.reducerPath]:corsesApi.reducer,
    [courseSelectionApi.reducerPath]:courseSelectionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(studentsApi.middleware)
      .concat(teachersApi.middleware)
      .concat(majorsApi.middleware)
      .concat(corsesApi.middleware)
      .concat(courseSelectionApi.middleware)
});

export default customStore;
