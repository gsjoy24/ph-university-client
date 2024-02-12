import { baseApi } from '../../api/baseApi';

const userManagementApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		addStudent: builder.mutation({
			query: (student) => ({
				url: '/users/create-student',
				method: 'POST',
				body: student
			})
		})
	})
});
