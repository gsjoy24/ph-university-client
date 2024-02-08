import { Button, Col, Flex } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';

const CreateAcademicSemester = () => {
	const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
		console.log(data);
	};
	return (
		<Flex justify='center' align='center'>
			<Col span={12}>
				<PHForm onSubmit={onSubmit}>
					<h1>This is CreateAcademicSemester component</h1>
					<PHInput name='name' type='text' label='name' />
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</PHForm>
			</Col>
		</Flex>
	);
};

export default CreateAcademicSemester;
