import { Button, Col, Flex, Select } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHSelect from '../../../components/form/PHSelect';

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

const CreateAcademicSemester = () => {
	const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
		const findData = nameOptions.find((item) => item.value === data.semester);

		const semesterData = {
			code: data.semester,
			name: findData?.label
		};
	};

	return (
		<Flex justify='center' align='center'>
			<Col span={8}>
				<PHForm onSubmit={onSubmit}>
					<PHSelect label='Semester' options={nameOptions} name='semester' />
					<PHSelect label='Year' options={nameOptions} name='year' />
					<PHSelect label='Year' options={nameOptions} name='year' />
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
