import { Button, Col, Divider, Flex, Row } from 'antd';
import PHTitle from '../../../components/PHTitle';
import PHDatePicker from '../../../components/form/PHDatePicker';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import { bloodGroupOptions, genderOptions } from '../../../constants/global';

const CreateStudent = () => {
	const onsSubmit = (values: any) => {
		console.log(values);
	};
	return (
		<Row justify='center'>
			<Col span={24}>
				<PHTitle title='Create Student' />
				<PHForm onSubmit={onsSubmit}>
					<Divider>Personal Information</Divider>

					{/* name */}
					<Row gutter={10} align={'bottom'}>
						{' '}
						<Col span={8}>
							<PHInput type='text' label='Student Name' name='name.firstName' placeholder='first name' />
						</Col>
						<Col span={8}>
							{' '}
							<PHInput type='text' name='name.middleName' placeholder='middle name' />
						</Col>
						<Col span={8}>
							{' '}
							<PHInput type='text' name='name.lastName' placeholder='last name' />
						</Col>
					</Row>

					{/* gender, blood group and date of birth */}
					<Row gutter={10} align={'top'}>
						<Col span={8}>
							{' '}
							<PHSelect label='Gender' name='gender' options={genderOptions} />
						</Col>
						<Col span={8}>
							<PHSelect label='Blood Group' name='bloodGroup' options={bloodGroupOptions} />
						</Col>
						<Col span={8}>
							<PHDatePicker label='Date of birth' name='dateOfBirth' />
						</Col>
					</Row>

					<Button type='primary' htmlType='submit' block>
						Submit
					</Button>
				</PHForm>
			</Col>
		</Row>
	);
};

export default CreateStudent;
