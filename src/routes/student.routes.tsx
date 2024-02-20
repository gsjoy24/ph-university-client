import StudentDashboard from '../pages/student/StudentDashboard';
import StudentOfferedCourses from '../pages/student/StudentOfferedCourses';

export const studentPaths = [
	{
		name: 'Dashboard',
		path: 'dashboard',
		element: <StudentDashboard />
	},
	{
		name: 'Offered Courses',
		path: 'offered-courses',
		element: <StudentOfferedCourses />
	}
];
