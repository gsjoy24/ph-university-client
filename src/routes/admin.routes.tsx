import AdminDashboard from '../pages/admin/AdminDashboard';
import AcademicDeparment from '../pages/admin/academicManagement/AcademicDepartment';
import AcademicFaculty from '../pages/admin/academicManagement/AcademicFaculty';
import AcademicSemester from '../pages/admin/academicManagement/AcademicSemester';
import CreateAcademicDepartment from '../pages/admin/academicManagement/CreateAcademicDepartment';
import CreateAcademicFaculty from '../pages/admin/academicManagement/CreateAcademicFaculty';
import CreateAcademicSemester from '../pages/admin/academicManagement/CreateAcademicSemester';
import CreateAdmin from '../pages/admin/userManagement/CreateAdmin';
import CreateFaculty from '../pages/admin/userManagement/CreateFaculty';
import CreateStudent from '../pages/admin/userManagement/CreateStudent';
import StudentDetails from '../pages/admin/userManagement/StudentDetails';
import Students from '../pages/admin/userManagement/Students';

const adminPaths = [
	{
		name: 'Dashboard',
		path: 'dashboard',
		element: <AdminDashboard />
	},
	{
		name: 'Academic Management',
		children: [
			{
				name: 'Create A. Semester',
				path: 'create-academic-semester',
				element: <CreateAcademicSemester />
			},
			{
				name: 'Academic Semester',
				path: 'academic-semester',
				element: <AcademicSemester />
			},
			{
				name: 'Create A. Faculty',
				path: 'create-academic-faculty',
				element: <CreateAcademicFaculty />
			},
			{
				name: 'Academic Faculty',
				path: 'academic-faculty',
				element: <AcademicFaculty />
			},
			{
				name: 'Create A. Department',
				path: 'create-academic-department',
				element: <CreateAcademicDepartment />
			},
			{
				name: 'Academic Department',
				path: 'academic-department',
				element: <AcademicDeparment />
			}
		]
	},
	{
		name: 'User Management',
		children: [
			{
				name: 'Create Student',
				path: 'create-student',
				element: <CreateStudent />
			},
			{
				name: 'Students',
				path: 'students',
				element: <Students />
			},
			{
				path: 'student-details/:studentId',
				element: <StudentDetails />
			},
			{
				name: 'Create Admin',
				path: 'create-admin',
				element: <CreateAdmin />
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
