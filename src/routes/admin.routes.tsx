import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import CreateStudent from '../pages/admin/CreateStudent';

const adminPaths2 = [
	{
		name: 'Dashboard',
		path: '/admin/dashboard',
		element: <AdminDashboard />
	},
	{
		name: 'User Management',
		children: [
			{
				name: 'Create Admin',
				path: '/admin/create-admin',
				element: <CreateAdmin />
			},
			{
				name: 'Create Student',
				path: '/admin/create-student',
				element: <CreateStudent />
			},
			{
				name: 'Create Faculty',
				path: '/admin/create-faculty',
				element: <CreateFaculty />
			}
		]
	}
];

const adminPaths = [
	{
		path: 'dashboard',
		element: <AdminDashboard />
	},
	{
		path: 'create-student',
		element: <CreateStudent />
	},
	{
		path: 'create-faculty',
		element: <CreateFaculty />
	},
	{
		path: 'create-admin',
		element: <CreateAdmin />
	}
];

export default adminPaths;
