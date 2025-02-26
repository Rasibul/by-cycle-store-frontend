import { baseApi } from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => "/auth",
        }),
        register: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/register',
                method: 'POST',
                body: userInfo,
            }),
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        getSingleUserById: builder.query({
            query: (id) => `/auth/${id}`,
        }),
     
    }),
});

export const { useGetAllUsersQuery ,useRegisterMutation, useLoginMutation, useGetSingleUserByIdQuery, } = authApi;