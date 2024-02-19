import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProtectedRoute from '../components/layout/ProtectedRoute';
import ChangePassword from '../pages/ChangePassword';
import Login from '../pages/Login';
import Register from '../pages/Register';
import routesGenerator from '../utils/routesGenerator';
import adminPaths from './admin.routes';
import { facultyPaths } from './faculty.routes';
import { studentPaths } from './student.routes';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/admin',
		element: (
			<ProtectedRoute role='admin'>
				<App />
			</ProtectedRoute>
		),
		children: routesGenerator(adminPaths)
	},
	{
		path: '/student',
		element: (
			<ProtectedRoute role='student'>
				<App />
			</ProtectedRoute>
		),
		children: routesGenerator(studentPaths)
	},
	{
		path: '/faculty',
		element: (
			<ProtectedRoute role='faculty'>
				<App />
			</ProtectedRoute>
		),
		children: routesGenerator(facultyPaths)
	},
	{
		path: 'login',
		element: <Login />
	},
	{
		path: 'change-password',
		element: <ChangePassword />
	},
	{
		path: 'register',
		element: <Register />
	},
	{
		path: '*',
		element: <h1>Not Found</h1>
	}
]);

export default router;
