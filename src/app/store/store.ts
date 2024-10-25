import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "../../features/slice/weatherApi";
import { optionsApi } from "../../features/slice/optionsApi";

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [optionsApi.reducerPath]: optionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware, optionsApi.middleware),
});
