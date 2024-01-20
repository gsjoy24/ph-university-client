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
	return await baseQuery(args, api, extraOptions);
};

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: baseQueryWithRefreshToken,
	endpoints: () => ({})
});
