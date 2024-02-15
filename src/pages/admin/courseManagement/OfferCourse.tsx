import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Col, Row, Spin } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import PHTitle from '../../../components/PHTitle';
import PHDatePicker from '../../../components/form/PHDatePicker';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import { semesterStatusOptions } from '../../../constants/semester';
import { useGetAllSemestersQuery } from '../../../redux/features/admin/academicManagement.api';
import {
	useGetAllRegisteredSemestersQuery,
	useRegisterSemesterMutation
} from '../../../redux/features/admin/courseManagement.api';

import { useState } from 'react';
import PHSelectWithWatch from '../../../components/form/PHSelectWithWatch';
import { useGetAllFacultiesQuery } from '../../../redux/features/admin/userManagement.api';
import { TResponse } from '../../../types/global.type';

const OfferCourse = () => {
	const [id, setId] = useState<string | undefined>(undefined);
	// registerSemester is a function that is used to register a semester
	const [registerSemester, { isLoading }] = useRegisterSemesterMutation();

	// registered semesters and options
	const { data: registeredSemesters, isLoading: SisLoading } = useGetAllRegisteredSemestersQuery([
		{ name: 'sort', value: 'status' }
	]);
	const semesterOptions = registeredSemesters?.data?.map((semester: any) => ({
		label: `${semester?.status} ${semester?.academicSemester?.name} - ${semester?.academicSemester?.year}`,
		value: semester?._id
	}));

	// academic faculties and options
	const { data: academicFaculties, isLoading: FisLoading } = useGetAllFacultiesQuery([{ name: 'sort', value: 'name' }]);
	const facultyOptions = academicFaculties?.data?.map((faculty) => ({
		label: faculty?.name,
		value: faculty?._id
	}));

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		console.log(data);
	};

	return (
		<Row justify='center'>
			<Col span={20}>
				<PHTitle title='Create Academic Semester' />
			</Col>
			<Col span={20}>
				<h1
					style={{
						marginBottom: '20px'
					}}
				></h1>
				<PHForm onSubmit={onSubmit}>
					<Row gutter={10}>
						<Col>
							<PHSelectWithWatch
								label='Semester'
								name='academicSemester'
								options={semesterOptions}
								onValueChange={setId}
								disabled={SisLoading}
							/>
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
