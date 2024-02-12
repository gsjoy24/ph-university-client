import { Button, Col, Flex } from 'antd';
import { FieldValues } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';

const CreateAcademicFaculty = () => {
	const onSubmit = (data: FieldValues) => {
		console.log('data:', data);
	};
	return (
		<Flex justify='center' align='center' style={{ minHeight: '85vh' }}>
			<Col span={10}>
				<h1 style={{ marginBottom: '15px' }}>Create new academic faculty</h1>
				<PHForm onSubmit={onSubmit}>
					<PHInput type='text' label='Academic Faculty Name' name='name' />
					<Button type='primary' htmlType='submit' block>
						Create
					</Button>
				</PHForm>
			</Col>
		</Flex>
	);
};

export default CreateAcademicFaculty;
