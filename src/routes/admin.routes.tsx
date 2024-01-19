import { NavLink } from 'react-router-dom';
import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import CreateStudent from '../pages/admin/CreateStudent';
import { TNavItem, TRoute } from './routes.interface';

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

export const adminSidebarItems = adminPaths.reduce((acc: TNavItem[], item) => {
	if (item.name && item.path) {
		acc.push({
			key: item.name,
			label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
		});
	}
	if (item.children) {
		acc.push({
			key: item.name,
			label: item.name,
			children: item.children.map((child) => {
				return {
					key: child.name,
					label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
				};
			})
		});
	}
	return acc;
}, []);

export default adminPaths;
