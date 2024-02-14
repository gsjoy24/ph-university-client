import { TQueryParams, TResponseRedux, TStudent } from '../../../types';
import { baseApi } from '../../api/baseApi';

const userManagementApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		registerSemester: builder.mutation({
			query: (data) => ({
				url: '/semesters-registrations',
				method: 'POST',
				body: data
			})
		}),
		getAllRegisteredSemesters: builder.query({
			query: (args) => {
				const params = new URLSearchParams();
				args?.forEach((param: TQueryParams) => {
					params.append(param.name, param.value);
				});

				return {
					url: '/semesters-registrations',
					method: 'GET',
					params
				};
			},
			transformResponse: (response: TResponseRedux<TStudent[]>) => {
				return {
					data: response.data,
					meta: response.meta
				};
			}
		})
	})
});

export const { useRegisterSemesterMutation, useGetAllRegisteredSemestersQuery } = userManagementApi;

export default userManagementApi;
