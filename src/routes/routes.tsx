import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Register from '../pages/Register';
import routesGenerator from '../utils/routesGenerator';
import adminPaths from './admin.routes';
import { studentPaths } from './student.routes';
import { facultyPaths } from './faculty.routes';
import ProtectedRoute from '../components/layout/ProtectedRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/admin',
		element: <App />,
		children: routesGenerator(adminPaths)
	},
	{
		path: '/student',
		element: <App />,
		children: routesGenerator(studentPaths)
	},
	{
		path: '/faculty',
		element: <App />,
		children: routesGenerator(facultyPaths)
	},
	{
		path: 'login',
		element: <Login />
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
