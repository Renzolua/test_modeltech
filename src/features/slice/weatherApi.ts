import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { weatherDataElement } from "../../types/weatherType";

export const weatherApi = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/weather" }),
  endpoints: (builder) => ({
    getWeather: builder.query<weatherDataElement[], void>({
      query: () => "",
    }),
    addWeatherElement: builder.mutation({
      query: (body) => ({
        url: "add",
        method: "POST",
        body,
      }),
    }),
    removeWeatherElement: builder.mutation({
      query: (id) => ({
        url: `delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetWeatherQuery,
  useAddWeatherElementMutation,
  useRemoveWeatherElementMutation
} = weatherApi;
