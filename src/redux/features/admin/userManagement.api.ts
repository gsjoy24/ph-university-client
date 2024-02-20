import { TFaculty, TQueryParams, TResponseRedux, TStudent } from '../../../types';
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
		}),

		addFaculty: builder.mutation({
			query: (data) => ({
				url: '/users/create-faculty',
				method: 'POST',
				body: data
			})
		}),
		getAllFaculties: builder.query({
			query: (args) => {
				const params = new URLSearchParams();
				args?.forEach((param: TQueryParams) => {
					params.append(param.name, param.value);
				});

				return {
					url: '/faculties',
					method: 'GET',
					params
				};
			},
			transformResponse: (response: TResponseRedux<TFaculty[]>) => {
				return {
					data: response.data,
					meta: response.meta
				};
			}
		}),
		changePassword: builder.mutation({
			query: (data) => ({
				url: '/auth/change-password',
				method: 'POST',
				body: data
			})
		})
	})
});

export const {
	useAddStudentMutation,
	useGetAllStudentsQuery,
	useAddFacultyMutation,
	useGetAllFacultiesQuery,
	useChangePasswordMutation
} = userManagementApi;

export default userManagementApi;
