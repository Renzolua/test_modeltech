import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { weatherDataElement } from "../../types/weatherType";

export const optionsApi = createApi({
  reducerPath: "options",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/options" }),
  endpoints: (builder) => ({
    getWeatherOptions: builder.query<weatherDataElement[], void>({
      query: () => "weather",
    }),
    getMembersOptions: builder.query<weatherDataElement[], void>({
      query: () => "members",
    }),
  }),
});

export const { useGetWeatherOptionsQuery, useGetMembersOptionsQuery } =
optionsApi;
