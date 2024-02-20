import { baseApi } from '../../api/baseApi';

import { TFaculty, TQueryParams, TResponseRedux, TStudent } from '../../../types';

const studentCourseApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		addStudent: builder.mutation({
			query: (data) => ({
				url: '/users/create-student',
				method: 'POST',
				body: data
			})
		}),
		getAllOfferedCourses: builder.query({
			query: (args) => {
				const params = new URLSearchParams();
				args?.forEach((param: TQueryParams) => {
					params.append(param.name, param.value);
				});

				return {
					url: '/offered-courses/my-offered-courses',
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

export const { useAddStudentMutation, useGetAllOfferedCoursesQuery } = studentCourseApi;

export default studentCourseApi;
