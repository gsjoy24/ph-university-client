export type TSemesterRegistration = {
	academicSemester: string;
	status: string;
	startDate: string;
	endDate: string;
	minCredit: number;
	maxCredit: number;
};

export type TPreRequisiteCourse = {
	course: string;
	isDeleted: boolean;
};

export type TCourse = {
	_id: string;
	title: string;
	prefix: string;
	code: number;
	credits: number;
	preRequisiteCourses: TPreRequisiteCourse[];
};
