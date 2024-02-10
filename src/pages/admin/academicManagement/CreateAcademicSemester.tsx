import { Button, Col, Flex, Select } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHSelect from '../../../components/form/PHSelect';

type TSemesterData = {
	code: string;
	name: string;
	year: string;
	startMonth: string;
	endMonth: string;
};

// for semester options
const nameOptions = [
	{
		value: '01',
		label: 'Autumn'
	},
	{
		value: '02',
		label: 'Summer'
	},
	{
		value: '03',
		label: 'Fall'
	}
];
// fr year options
const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 5 }, (_, i) => currentYear + i).map((year) => ({
	value: year.toString(),
	label: year.toString()
}));

const CreateAcademicSemester = () => {
	const onSubmit: SubmitHandler<FieldValues> = ({ code, year, startMonth, endMonth }: any) => {
		const findData = nameOptions.find((item) => item.value === code);

		const semesterData: TSemesterData = {
			code,
			name: findData!.label,
			year,
			startMonth,
			endMonth
		};

		console.log(semesterData);
	};

	return (
		<Flex justify='center' align='center'>
			<Col span={8}>
				<PHForm onSubmit={onSubmit}>
					<PHSelect label='Semester' options={nameOptions} name='code' />
					<PHSelect label='Year' options={yearOptions} name='year' />
					<PHSelect label='Start Month' options={nameOptions} name='startMonth' />
					<PHSelect label='End Month' options={nameOptions} name='endMonth' />
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</PHForm>
			</Col>
		</Flex>
	);
};

export default CreateAcademicSemester;
