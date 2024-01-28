import {
	BaseQueryApi,
	BaseQueryFn,
	DefinitionType,
	FetchArgs,
	createApi,
	fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import { logOut, setUser } from '../features/auth/authSlice';
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

const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (
	args: any,
	api: any,
	extraOptions: any
): Promise<any> => {
	let result = await baseQuery(args, api, extraOptions);
	if (result.error?.status === 401) {
		const refreshResult = await fetch(`auth/refresh-token`, {
			method: 'POST',
			credentials: 'include'
		});
		const data = await refreshResult.json();
		if (data?.data?.accessToken) {
			const user = api.getState().auth.user;
			api.dispatch(
				setUser({
					user,
					token: data.data.token
				})
			);
			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logOut());
		}
	}
	return result;
};

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: baseQueryWithRefreshToken,
	endpoints: () => ({})
});
