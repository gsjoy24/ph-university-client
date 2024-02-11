import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Col, Flex, Select, Spin } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import PHForm from '../../../components/form/PHForm';
import PHSelect from '../../../components/form/PHSelect';
import { monthNamesOptions } from '../../../constants/global';
import { semesterOptions } from '../../../constants/semester';
import { useAddAcademicSemesterMutation } from '../../../redux/features/admin/academicManagement.api';
import { academicSemesterSchema } from '../../../schemas/academicManagement.schema';
import TSemesterData from '../../../types/semesterData.type';

// for year options
const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 5 }, (_, i) => currentYear + i).map((year) => ({
	value: year.toString(),
	label: year.toString()
}));

const CreateAcademicSemester = () => {
	const [addAcademicSemester, { isLoading }] = useAddAcademicSemesterMutation();

	const onSubmit: SubmitHandler<FieldValues> = async ({ code, year, startMonth, endMonth }: any) => {
		const findData = semesterOptions.find((item) => item?.value === code);
		const semesterData: TSemesterData = {
			name: findData!.label,
			code,
			startMonth,
			endMonth,
			year
		};

		try {
			const res = await addAcademicSemester(semesterData);

			if (res?.data?.message) {
				toast.success(res?.data?.message);
			} else {
				toast.error(res?.error?.data?.message);
			}
		} catch (error) {
			console.log('error:', error);
			toast.error(error?.message);
		}
	};

	return (
		<Flex justify='center' align='center'>
			<Col span={12}>
				<h1
					style={{
						marginBottom: '20px'
					}}
				>
					Create Academic Semester
				</h1>
				<PHForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
					<Flex justify='space-between' gap={10} align='center'>
						<PHSelect label='Semester' options={semesterOptions} name='code' />
						<PHSelect label='Year' options={yearOptions} name='year' />
					</Flex>
					<Flex justify='space-between' gap={10} align='center'>
						<PHSelect label='Start Month' options={monthNamesOptions} name='startMonth' />
						<PHSelect label='End Month' options={monthNamesOptions} name='endMonth' />
					</Flex>

					<Button block type='primary' htmlType='submit' disabled={isLoading}>
						{isLoading ? <Spin /> : 'Create'}
					</Button>
				</PHForm>
			</Col>
		</Flex>
	);
};

export default CreateAcademicSemester;
