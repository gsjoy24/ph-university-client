import { TAcademicSemester, TResponseRedux } from '../../../types';
import { baseApi } from '../../api/baseApi';

const academicManagementApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllSemesters: builder.query({
			query: (args) => {
				const params = new URLSearchParams();
				if (args) {
					args.forEach((item: { name: string; value: string }) => {
						params.append(item.name, item.value);
					});
				}

				return {
					url: '/academic-semesters',
					method: 'GET',
					params
				};
			},
			transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
				return {
					data: response.data,
					meta: response.meta
				};
			}
		}),

		addAcademicSemester: builder.mutation({
			query: (data) => ({
				url: '/academic-semesters/create-academic-semester',
				method: 'POST',
				body: data
			})
		}),

		getAllAcademicFaculties: builder.query({
			query: (args) => {
				const params = new URLSearchParams();
				args && params.append('name', args);

				return {
					url: '/academic-faculties',
					method: 'GET',
					params
				};
			},
			transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
				return {
					data: response.data,
					meta: response.meta
				};
			}
		}),

		addAcademicFaculty: builder.mutation({
			query: (data) => ({
				url: '/academic-faculties',
				method: 'POST',
				body: data
			})
		})
	})
});

export const {
	useAddAcademicSemesterMutation,
	useGetAllSemestersQuery,
	useAddAcademicFacultyMutation,
	useGetAllAcademicFacultiesQuery
} = academicManagementApi;
