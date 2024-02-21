import { baseApi } from '../../api/baseApi';

import { TFaculty, TQueryParams, TResponseRedux, TStudent } from '../../../types';

const studentCourseApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		enrollCourse: builder.mutation({
			query: (data) => ({
				url: '/enrolled-courses/create-enrolled-course',
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

export const { useEnrollCourseMutation, useGetAllOfferedCoursesQuery } = studentCourseApi;
export default studentCourseApi;
