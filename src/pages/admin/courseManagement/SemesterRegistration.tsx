import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Col, Flex, Row, Select, Spin } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import PHTitle from '../../../components/PHTitle';
import PHDatePicker from '../../../components/form/PHDatePicker';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import { monthNamesOptions } from '../../../constants/global';
import { semesterOptions, semesterStatusOptions } from '../../../constants/semester';
import {
	useAddAcademicSemesterMutation,
	useGetAllSemestersQuery
} from '../../../redux/features/admin/academicManagement.api';
import { academicSemesterSchema } from '../../../schemas/academicManagement.schema';
import TAcademicSemester from '../../../types/academicManagement.type';
import { TResponse } from '../../../types/global.type';

const SemesterRegistration = () => {
	const isLoading = false;
	const { data: SData, isLoading: SisLoading } = useGetAllSemestersQuery([{ name: 'sort', value: 'year' }]);

	const semesterOptions = SData?.data?.map((semester) => ({
		label: `${semester?.name} - ${semester?.year}`,
		value: semester?._id
	}));

	const onSubmit: SubmitHandler<FieldValues> = async ({ code, year, startMonth, endMonth }: any) => {
		const findData = semesterOptions?.find((item) => item?.value === code);
		const semesterData: TAcademicSemester = {
			name: findData!.label,
			code,
			startMonth,
			endMonth,
			year
		};

		// try {
		// 	const res = (await addAcademicSemester(semesterData)) as TResponse<TAcademicSemester>;

		// 	if (res?.data?.message) {
		// 		toast.success(res?.data?.message);
		// 	} else {
		// 		toast.error(res?.error?.data?.message);
		// 	}
		// } catch (error) {
		// 	console.log('error:', error);
		// 	toast.error('Something went wrong');
		// }
	};

	return (
		<Row>
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
						<Col span={12}>
							<PHSelect label='Semester' options={semesterOptions} name='code' />
						</Col>
						<Col span={12}>
							{' '}
							<PHSelect label='Semester Status' options={semesterStatusOptions} name='status' />
						</Col>

						<Col span={12}>
							<PHDatePicker label='Start Date' name='startDate' />
						</Col>
						<Col span={12}>
							<PHDatePicker label='End Date' name='endDate' />
						</Col>

						<Col span={12}>
							<PHInput type='number' label='Min Credit' name='minCredit' />
						</Col>
						<Col span={12}>
							<PHInput type='number' label='Max Credit' name='maxCredit' />
						</Col>
					</Row>

					<Button block type='primary' htmlType='submit' disabled={isLoading}>
						{isLoading ? <Spin /> : 'Create'}
					</Button>
				</PHForm>
			</Col>
		</Row>
	);
};

export default SemesterRegistration;
