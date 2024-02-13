import { TQueryParams, TResponseRedux, TStudent } from '../../../types';
import { baseApi } from '../../api/baseApi';

const userManagementApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		addStudent: builder.mutation({
			query: (data) => ({
				url: '/users/create-student',
				method: 'POST',
				body: data
			})
		}),
		getAllStudents: builder.query({
			query: (args) => {
				const params = new URLSearchParams();
				args?.forEach((param: TQueryParams) => {
					params.append(param.name, param.value);
				});

				return {
					url: '/students',
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

export const { useAddStudentMutation, useGetAllStudentsQuery } = userManagementApi;

export default userManagementApi;
