import { TAcademicDepartment } from './academicManagement.type';

export type TStudent = {
	_id: string;
	id: string;
	user: string;
	name: TName;
	gender: string;
	dateOfBirth: string;
	email: string;
	contactNo: string;
	emergencyContactNo: string;
	bloodGroup: string;
	presentAddress: string;
	permanentAddress: string;
	guardian: TGuardian;
	localGuardian: TLocalGuardian;
	admissionSemester: TAdmissionSemester;
	academicDepartment: TAcademicDepartment;
	academicFaculty: string;
	profileImg: string;
	isDeleted: boolean;
	createdAt: string;
	updatedAt: string;
	fullName: string;
};

export type TName = {
	firstName: string;
	middleName: string;
	lastName: string;
};

export type TGuardian = {
	fatherName: string;
	fatherOccupation: string;
	fatherContactNo: string;
	motherName: string;
	motherOccupation: string;
	motherContactNo: string;
};

export type TLocalGuardian = {
	name: string;
	occupation: string;
	contactNo: string;
	address: string;
};

export type TAdmissionSemester = {
	_id: string;
	name: string;
	year: string;
	code: string;
	startMonth: string;
	endMonth: string;
	createdAt: string;
	updatedAt: string;
};
