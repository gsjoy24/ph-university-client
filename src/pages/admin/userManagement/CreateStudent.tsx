import { Button, Col, Flex } from 'antd';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';

const CreateStudent = () => {
	const onsSubmit = (values: any) => {
		console.log(values);
	};
	return (
		<Flex justify='center'>
			<Col span={14}>
				<h1
					style={{
						marginBottom: '10px',
						padding: '5px 0',
						fontSize: '1.5rem',
						width: '100%',
						textAlign: 'center',
						background: '#001529',
						color: 'white'
					}}
				>
					Create Student
				</h1>
				<PHForm onSubmit={onsSubmit}>
					{/* name */}
					<Flex align='end' gap={10}>
						<PHInput type='text' label='Student Name' name='firstName' />
						<PHInput type='text' name='middleName' />
						<PHInput type='text' name='lastName' />
					</Flex>

					{/* email */}
					<PHInput type='email' label='Email' name='email' />

					{/* password */}
					<PHInput type='password' label='Password' name='password' />

					{/* confirm password */}
					<PHInput type='password' label='Confirm Password' name='confirmPassword' />

					{/* submit */}

					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</PHForm>
			</Col>
		</Flex>
	);
};

export default CreateStudent;
