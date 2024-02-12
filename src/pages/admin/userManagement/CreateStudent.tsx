import { Button, Col, Divider, Flex } from 'antd';
import PHTitle from '../../../components/PHTitle';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import { bloodGroupOptions, genderOptions } from '../../../constants/global';

const CreateStudent = () => {
	const onsSubmit = (values: any) => {
		console.log(values);
	};
	return (
		<Flex justify='center'>
			<Col span={18}>
				<PHTitle title='Create Student' />
				<PHForm onSubmit={onsSubmit}>
					<Divider>Personal Information</Divider>
					{/* name */}
					<Flex align='end' justify='space-between' gap={10}>
						<PHInput type='text' label='Student Name' name='name.firstName' placeholder='first name' />
						<PHInput type='text' name='name.middleName' placeholder='middle name' />
						<PHInput type='text' name='name.lastName' placeholder='last name' />
					</Flex>
					<Flex align='end' gap={10}>
						<PHSelect label='Gender' name='gender' options={genderOptions} />
						<PHSelect label='Blood Group' name='bloodGroup' options={bloodGroupOptions} />
					</Flex>

					<Button type='primary' htmlType='submit' block>
						Submit
					</Button>
				</PHForm>
			</Col>
		</Flex>
	);
};

export default CreateStudent;
