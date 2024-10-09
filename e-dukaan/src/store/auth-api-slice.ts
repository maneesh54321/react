import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthActions, persistToken } from "./auth-slice";

export interface Token {
  token: string;
  expirationTime: string;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
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
          dispatch(authApi.endpoints.getUserById.initiate(1));
        } catch (error) {
          console.log("mutation failed", error);
        }
      },
    }),
    getUserById: builder.query<User, number>({
      query: (id) => `users/${id}`,
      onQueryStarted: async (_arg, { dispatch, queryFulfilled }) => {
        try {
          const result = await queryFulfilled;
          dispatch(AuthActions.setUser(result.data));
        } catch (error) {
          console.log("mutation failed", error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useLazyGetUserByIdQuery } = authApi;
