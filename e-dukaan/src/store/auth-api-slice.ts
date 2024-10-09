import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { persistToken } from "./auth-slice";

export interface Token {
  token: string;
  expirationTime: string;
}

export interface Credentials {
  username: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    login: builder.mutation<Token, Credentials>({
      query: (credentials: Credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: { token: string }) => {
        const currentTime = new Date().getTime();
        const expirationTime = new Date(currentTime + 300 * 1000);
        return {
          token: response.token,
          expirationTime: expirationTime.toISOString(),
        };
      },
      onQueryStarted: async (_arg, { dispatch, queryFulfilled }) => {
        try {
          const result = await queryFulfilled;

          dispatch(persistToken(result.data));
        } catch (error) {
          console.log("mutation failed", error);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
