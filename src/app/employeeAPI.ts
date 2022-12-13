import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const productApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getAllProducts: builder.query<{ results: Array<{ name: string }> }, void>({
      query: () => "products",
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetAllProductsQuery,
  util: { getRunningOperationPromises },
} = productApi;

// export endpoints for use in SSR
export const { getAllProducts } = productApi.endpoints;
