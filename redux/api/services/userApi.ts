import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
  name: string;
  email: string;
  password: string;
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXTAUTH_URL,
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userData: User) => ({
        url: '/api/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useSignupMutation } = userApi;
