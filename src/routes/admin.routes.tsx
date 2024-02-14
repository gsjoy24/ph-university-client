import AdminDashboard from '../pages/admin/AdminDashboard';
import AcademicDeparment from '../pages/admin/academicManagement/AcademicDepartment';
import AcademicFaculty from '../pages/admin/academicManagement/AcademicFaculty';
import AcademicSemester from '../pages/admin/academicManagement/AcademicSemester';
import CreateAcademicDepartment from '../pages/admin/academicManagement/CreateAcademicDepartment';
import CreateAcademicFaculty from '../pages/admin/academicManagement/CreateAcademicFaculty';
import CreateAcademicSemester from '../pages/admin/academicManagement/CreateAcademicSemester';
import CreateCourse from '../pages/admin/courseManagement/CreateCourse';
import RegisteredSemesters from '../pages/admin/courseManagement/RegisteredSemesters';
import SemesterRegistration from '../pages/admin/courseManagement/SemesterRegistration';
import AdminDetails from '../pages/admin/userManagement/AdminDetails';
import Admins from '../pages/admin/userManagement/Admins';
import CreateAdmin from '../pages/admin/userManagement/CreateAdmin';
import CreateFaculty from '../pages/admin/userManagement/CreateFaculty';
import CreateStudent from '../pages/admin/userManagement/CreateStudent';
import Faculties from '../pages/admin/userManagement/Faculties';
import FacultyDetails from '../pages/admin/userManagement/FacultyDetails';
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
				name: 'Create Faculty',
				path: 'create-faculty',
				element: <CreateFaculty />
			},
			{
				name: 'Faculties',
				path: 'faculties',
				element: <Faculties />
			},
			{
				path: 'faculty-details/:facultyId',
				element: <FacultyDetails />
			},
			{
				name: 'Create Admin',
				path: 'create-admin',
				element: <CreateAdmin />
			},
			{
				name: 'Admins',
				path: 'admins',
				element: <Admins />
			},
			{
				path: 'admin-details/:adminId',
				element: <AdminDetails />
			}
		]
	},
	{
		name: 'Course Management',
		children: [
			{
				name: 'Registered Semesters',
				path: 'registered-semesters',
				element: <RegisteredSemesters />
			},
			{
				name: 'Semester Registration',
				path: 'semester-registration',
				element: <SemesterRegistration />
			},
			{
				name: 'Create Course',
				path: 'create-course',
				element: <CreateCourse />
			}
		]
	}
];

export default adminPaths;
