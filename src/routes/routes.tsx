import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Register from '../pages/Register';
import adminPaths from './admin.routes';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/admin',
		element: <App />,
		children: adminPaths
	},
	{
		path: '/student',
		element: <App />,
		children: adminPaths
	},
	{
		path: '/faculty',
		element: <App />,
		children: adminPaths
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
