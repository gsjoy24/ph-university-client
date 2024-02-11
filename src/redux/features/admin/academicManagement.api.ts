import { baseApi } from '../../api/baseApi';

const academicManagementApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllSemesters: builder.query({
			query: () => ({
				url: '/academic-semesters',
				method: 'GET'
			})
		}),
		addAcademicSemester: builder.mutation({
			query: (data) => ({
				url: '/academic-semesters/create-academic-semsester',
				method: 'POST',
				body: data
			})
		})
	})
});

export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation } = academicManagementApi;
