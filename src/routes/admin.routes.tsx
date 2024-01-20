import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import CreateStudent from '../pages/admin/CreateStudent';
import AcademicSemester from '../pages/admin/academicManagement/AcademicSemester';

const adminPaths = [
	{
		name: 'Dashboard',
		path: 'dashboard',
		element: <AdminDashboard />
	},
	{
		name: 'Academic Semesters',
		children: [
			{
				name: 'Academic Semester',
				path: 'academic-semester',
				element: <AcademicSemester />
			}
		]
	},
	{
		name: 'User Management',
		children: [
			{
				name: 'Create Admin',
				path: 'create-admin',
				element: <CreateAdmin />
			},
			{
				name: 'Create Student',
				path: 'create-student',
				element: <CreateStudent />
			},
			{
				name: 'Create Faculty',
				path: 'create-faculty',
				element: <CreateFaculty />
			}
		]
	}
];

export default adminPaths;
