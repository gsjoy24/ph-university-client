import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_SERVER_URL,
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.token;
		if (token) {
			headers.set('authorization', `${token}`);
		}  







		
		return headers;
	}
});

const baseQueryWithRefreshToken = async (args: any, api: any, extraOptions: any) => {
	const result = await baseQuery(args, api, extraOptions);
	if (result.error?.status === 401) {
		const refreshResult = await fetch(`auth/refresh-token`, {
			method: 'POST',
			credentials: 'include'
		});
	}
};

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: baseQueryWithRefreshToken,
	endpoints: () => ({})
});
