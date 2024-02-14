import { TCourse, TQueryParams, TResponseRedux, TStudent } from '../../../types';
import { baseApi } from '../../api/baseApi';

const courseManagementApi = baseApi.injectEndpoints({
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
		}),

		addCourse: builder.mutation({
			query: (data) => ({
				url: '/courses',
				method: 'POST',
				body: data
			})
		}),

		getAllCourses: builder.query({
			query: (args) => {
				const params = new URLSearchParams();
				args?.forEach((param: TQueryParams) => {
					params.append(param.name, param.value);
				});

				return {
					url: '/courses',
					method: 'GET',
					params
				};
			},
			transformResponse: (response: TResponseRedux<TCourse[]>) => {
				return {
					data: response.data,
					meta: response.meta
				};
			}
		})
	})
});

export const {
	useRegisterSemesterMutation,
	useGetAllRegisteredSemestersQuery,
	useAddCourseMutation,
	useGetAllCoursesQuery
} = courseManagementApi;

export default courseManagementApi;
