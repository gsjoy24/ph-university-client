import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import CreateStudent from '../pages/admin/CreateStudent';
import { TRoute } from './routes.interface';

const adminPaths = [
	{
		name: 'Dashboard',
		path: 'dashboard',
		element: <AdminDashboard />
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

// const adminPaths: TRoute[] = [
// 	{
// 		path: 'dashboard',
// 		element: <AdminDashboard />
// 	},
// 	{
// 		path: 'create-student',
// 		element: <CreateStudent />
// 	},
// 	{
// 		path: 'create-faculty',
// 		element: <CreateFaculty />
// 	},
// 	{
// 		path: 'create-admin',
// 		element: <CreateAdmin />
// 	}
// ];

export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
	if (item.path && item.element) {
		acc.push({
			path: item.path,
			element: item.element
		});
	}
	if (item.children) {
		item.children.forEach((child) => {
			if (child.path && child.element) {
				acc.push({
					path: child.path,
					element: child.element
				});
			}
		});
	}
	return acc;
}, []);
export default adminPaths;
