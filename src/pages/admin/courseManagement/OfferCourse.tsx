import { Button, Col, Form, Row, Spin, TimePicker } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import PHTitle from '../../../components/PHTitle';

import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import { useGetAllAcademicDepartmentsQuery } from '../../../redux/features/admin/academicManagement.api';
import {
	useGetAllCoursesQuery,
	useGetAllRegisteredSemestersQuery,
	useGetCourseFacultiesQuery,
	useRegisterSemesterMutation
} from '../../../redux/features/admin/courseManagement.api';

import { useState } from 'react';
import PHSelectWithWatch from '../../../components/form/PHSelectWithWatch';
import PHTimePicker from '../../../components/form/PHTimePicker';
import { dayNamesOptions } from '../../../constants/global';
import { TFaculty } from '../../../types';
import { TResponse } from '../../../types/global.type';

const OfferCourse = () => {
	const [courseId, setCourseId] = useState<string | undefined>('');

	// registerSemester is a function that is used to register a semester
	const [registerSemester, { isLoading }] = useRegisterSemesterMutation();

	//*  academic departments and options
	const { data: academicDepartments, isLoading: DepartmentsIsLoading } = useGetAllAcademicDepartmentsQuery([
		{
			name: 'sort',
			value: 'name'
		}
	]);
	const departmentOptions = academicDepartments?.data?.map((department) => ({
		label: department?.name,
		value: department?._id
	}));

	//! courses and options
	const { data: courses, isLoading: courseLoading } = useGetAllCoursesQuery([{ name: 'sort', value: 'year' }]);
	const courseOptions = courses?.data?.map((course) => ({
		label: `${course?.title} - ${course?.code}`,
		value: course?._id
	}));

	//! registered semesters and options
	const { data: registeredSemesters, isLoading: SisLoading } = useGetAllRegisteredSemestersQuery([
		{ name: 'sort', value: 'status' }
	]);
	const semesterOptions = registeredSemesters?.data?.map((semester: any) => ({
		label: `${semester?.status} ${semester?.academicSemester?.name} - ${semester?.academicSemester?.year}`,
		value: semester?._id
	}));

	const { data: courseFaculties, isLoading: facultiesLoading } = useGetCourseFacultiesQuery(courseId, {
		skip: !courseId
	});
	const facultyOptions =
		courseFaculties?.data?.faculties?.map((faculty: TFaculty) => ({
			label: faculty?.fullName,
			value: faculty?._id
		})) || [];

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		console.log(data.startTime, data.endTime);
	};

	return (
		<Row justify='center'>
			<Col span={20}>
				<PHTitle title='Offer Courses' />
			</Col>
			<Col span={20}>
				<h1
					style={{
						marginBottom: '20px'
					}}
				></h1>
				<PHForm onSubmit={onSubmit}>
					<Row gutter={10}>
						<Col span={12}>
							<PHSelect
								label='Department'
								name='academicDepartment'
								options={departmentOptions}
								disabled={SisLoading}
							/>
						</Col>
						<Col span={12}>
							<PHSelectWithWatch
								label='Course'
								name='course'
								options={courseOptions}
								disabled={SisLoading}
								onValueChange={setCourseId}
							/>
						</Col>
						<Col span={12}>
							<PHSelect label='Faculty' name='faculty' options={facultyOptions} disabled={!courseId} />
						</Col>
						<Col span={12}>
							<PHSelect label='Semester' name='semesterRegistration' options={semesterOptions} disabled={SisLoading} />
						</Col>

						<Col span={12}>
							<PHInput label='Max Capacity' name='maxCapacity' type='number' />
						</Col>
						<Col span={6}>
							<PHTimePicker label='Start Time' name='startTime' />
						</Col>
						<Col span={6}>
							<PHTimePicker label='End Time' name='endTime' />
						</Col>
						<Col span={8}>
							<PHSelect
								label='Section'
								name='section'
								options={[
									{
										label: 'A',
										value: 'A'
									},
									{
										label: 'B',
										value: 'B'
									},
									{
										label: 'C',
										value: 'C'
									},
									{
										label: 'D',
										value: 'D'
									}
								]}
							/>
						</Col>
						<Col span={16}>
							<PHSelect label='Days' name='days' options={dayNamesOptions} mode='multiple' />
						</Col>
					</Row>

					<Button block type='primary' htmlType='submit' disabled={isLoading || SisLoading}>
						{isLoading ? <Spin /> : 'Create'}
					</Button>
				</PHForm>
			</Col>
		</Row>
	);
};

export default OfferCourse;
