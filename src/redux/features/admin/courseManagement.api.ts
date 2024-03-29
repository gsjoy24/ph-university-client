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
		}),

		assignFaculties: builder.mutation({
			query: ({ courseId, faculties }) => ({
				url: `/courses/${courseId}/assign-faculties`,
				method: 'PUT',
				body: { faculties }
			})
		}),

		getCourseFaculties: builder.query({
			query: (courseId) => ({
				url: `/courses/${courseId}/faculties`,
				method: 'GET'
			})
		}),
		offerCourse: builder.mutation({
			query: (data) => ({
				url: '/offered-courses',
				method: 'POST',
				body: data
			})
		})
	})
});

export const {
	useRegisterSemesterMutation,
	useGetAllRegisteredSemestersQuery,
	useAddCourseMutation,
	useGetAllCoursesQuery,
	useAssignFacultiesMutation,
	useGetCourseFacultiesQuery,
	useOfferCourseMutation
} = courseManagementApi;

export default courseManagementApi;
