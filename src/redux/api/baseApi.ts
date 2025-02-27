import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        // baseUrl: "http://localhost:5000/api",
        baseUrl: "https://bi-cycle-store-neon.vercel.app/api",
        prepareHeaders: (headers) => {
            // Retrieve the token from localStorage
            const token = localStorage.getItem('authToken');
            console.log(token);
            if (token) {
                // Add the token to the Authorization header
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
});