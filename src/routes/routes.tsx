import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateStudent from '../pages/admin/CreateStudent';
import CreateFaculty from '../pages/admin/CreateFaculty';
import CreateAdmin from '../pages/admin/CreateAdmin';
import Login from '../pages/Login';
import Register from '../pages/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'about',
				element: <About />
			},
			{
				path: 'contact',
				element: <Contact />
			}
		]
	},
	{
		path: '/admin',
		element: <App />,
		children: [
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
		]
	},
	{
		path: 'login',
		element: <Login />
	},
	{
		path: 'register',
		element: <Register />
	}
]);

export default router;
