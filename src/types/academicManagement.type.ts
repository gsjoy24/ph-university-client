export type TAcademicSemester = {
	_id?: string;
	name?: string;
	code: string;
	year: string;
	startMonth: string;
	endMonth: string;
	createdAt?: string;
	updatedAt?: string;
};

export type TAcademicFaculty = {
	name: string;
	createdAt?: string;
	updatedAt?: string;
};

export type TAcademicDepartment = {
	name: string;
	createdAt?: string;
	updatedAt?: string;
};

export default TAcademicSemester;
