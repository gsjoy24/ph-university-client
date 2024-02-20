import { TCourse } from './courseManagement.type';

export type TOfferedCourse = {
	_id: string;
	semesterRegistration: string;
	academicSemester: string;
	academicFaculty: string;
	academicDepartment: string;
	course: TCourse;
	faculty: string;
	maxCapacity: number;
	section: string;
	days: string[];
	startTime: string;
	endTime: string;
	createdAt: string;
	updatedAt: string;
	enrolledCourses: any[];
	completedCourses: any[];
	completedCoursesIds: any[];
	isPreRequisiteFullFiled: boolean;
	isAlreadyEnrolled: boolean;
};
