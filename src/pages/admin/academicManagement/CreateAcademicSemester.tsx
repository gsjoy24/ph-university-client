import { Button, Col, Flex, Select } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';

const CreateAcademicSemester = () => {
	const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
		console.log(data);
	};
	const options = [
		{ value: '1', label: '1st Semester' },
		{ value: '2', label: '2nd Semester' },
		{ value: '3', label: '3rd Semester' }
	];
	return (
		<Flex justify='center' align='center'>
			<Col span={8}>
				<PHForm onSubmit={onSubmit}>
					<PHInput name='name' type='text' label='name' />
					<PHSelect label='Semester' options={options} name='D' />

					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</PHForm>
			</Col>
		</Flex>
	);
};

export default CreateAcademicSemester;
