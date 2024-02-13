import { Button, Col, Divider, Flex, Form, Input, Row, Spin } from 'antd';
import { Controller, FieldValues, SubmitHandler } from 'react-hook-form';
import PHTitle from '../../../components/PHTitle';
import PHDatePicker from '../../../components/form/PHDatePicker';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import { bloodGroupOptions, genderOptions } from '../../../constants/global';
import {
	useGetAllAcademicDepartmentsQuery,
	useGetAllSemestersQuery
} from '../../../redux/features/admin/academicManagement.api';
import { useAddStudentMutation } from '../../../redux/features/admin/userManagement.api';

const defaultValues = {
	name: {
		firstName: 'Daniel',
		middleName: 'Thomas',
		lastName: 'Wilson'
	},
	gender: 'male',
	bloodGroup: 'B-',

	email: 'danssiel.wdqilsojn@exsample.com',
	contactNo: '55566677277',
	emergencyContactNo: '88899902000',
	presentAddress: '234 Elm Street',
	permanentAddress: '567 Maple Avenue',

	guardian: {
		fatherName: 'James Wilson',
		fatherOccupation: 'Professor',
		fatherContactNo: '3334445555',
		motherName: 'Emma Wilson',
		motherOccupation: 'Engineer',
		motherContactNo: '3332221111'
	},
	localGuardian: {
		name: 'Sophie Adams',
		occupation: 'Artist',
		contactNo: '6667778888',
		address: '890 Oak Street'
	},
	admissionSemester: '65ca2216e7502d6ff719e512',
	academicDepartment: '65ca2e3f399c5c885bd8ee64'
};

const CreateStudent = () => {
	const { data: SData, isLoading: SisLoading } = useGetAllSemestersQuery(null);
	const semesterOptions = SData?.data?.map((semester) => ({
		label: `${semester?.name} - ${semester?.year}`,
		value: semester?._id
	}));

	const { data: DData, isLoading: DisLoading } = useGetAllAcademicDepartmentsQuery(null);
	const departmentOptions = DData?.data?.map((department) => ({
		label: department?.name,
		value: department?._id
	}));

	// handle form submission
	const [addStudent, { isLoading }] = useAddStudentMutation();
	const onsSubmit: SubmitHandler<FieldValues> = async (values) => {
		const formData = new FormData();
		const modifiedData = {
			password: 'password123',
			studentData: values
		};

		formData.append('data', JSON.stringify(modifiedData));
		formData.append('file', values.image);

		try {
			const res = await addStudent(formData);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Row justify='center'>
			<Col span={24}>
				<PHTitle title='Create Student' />
				<PHForm onSubmit={onsSubmit} defaultValues={defaultValues}>
					<Divider>Personal Information</Divider>
					{/* name */}
					<Row gutter={10} align={'bottom'}>
						<Col span={8}>
							<PHInput type='text' label='Student Name' name='name.firstName' placeholder='first name' />
						</Col>
						<Col span={8}>
							<PHInput type='text' name='name.middleName' placeholder='middle name' />
						</Col>
						<Col span={8}>
							<PHInput type='text' name='name.lastName' placeholder='last name' />
						</Col>
						<Col span={8}>
							<Controller
								name='image'
								render={({ field: { onChange, value, ...field } }) => (
									<Form.Item label='Image'>
										<Input
											{...field}
											value={value?.fileName}
											type='file'
											onChange={(e) => onChange(e.target.files?.[0])}
										/>
									</Form.Item>
								)}
							/>
						</Col>
					</Row>

					{/* gender, blood group and date of birth */}
					<Row gutter={10} align={'top'}>
						<Col span={8}>
							<PHSelect label='Gender' name='gender' options={genderOptions} />
						</Col>
						<Col span={8}>
							<PHSelect label='Blood Group' name='bloodGroup' options={bloodGroupOptions} />
						</Col>
						<Col span={8}>
							<PHDatePicker label='Date Of Birth' name='dateOfBirth' />
						</Col>
					</Row>

					{/* contact info */}
					<Divider>Contact Information</Divider>
					<Row gutter={10} align={'top'}>
						<Col span={8}>
							<PHInput type='text' label='Email Address' name='email' placeholder='example@gmail.com' />
						</Col>
						<Col span={8}>
							<PHInput type='text' label='Contact No.' name='contactNo' placeholder='+8801xxxxxxxxx' />
						</Col>
						<Col span={8}>
							<PHInput
								type='text'
								label='Emergency Contact No.'
								name='emergencyContactNo'
								placeholder='+8801xxxxxxxxx'
							/>
						</Col>
					</Row>

					{/* address */}
					<Row gutter={10} align={'top'}>
						<Col span={12}>
							<PHInput type='text' label='Present Address' name='presentAddress' />
						</Col>
						<Col span={12}>
							<PHInput type='text' label='Permanent Address' name='permanentAddress' />
						</Col>
					</Row>

					{/* guardian info */}
					<Divider>Guardian Information</Divider>
					<Row gutter={10} align={'top'}>
						<Col span={8}>
							<PHInput type='text' label='Father Name' name='guardian.fatherName' />
						</Col>
						<Col span={8}>
							<PHInput type='text' label='Father Occupation' name='guardian.fatherOccupation' />
						</Col>
						<Col span={8}>
							<PHInput type='text' label='Father Contact No.' name='guardian.fatherContactNo' />
						</Col>

						<Col span={8}>
							<PHInput type='text' label='Mother Name' name='guardian.motherName' />
						</Col>
						<Col span={8}>
							<PHInput type='text' label='Mother Occupation' name='guardian.motherOccupation' />
						</Col>
						<Col span={8}>
							<PHInput type='text' label='Mother Contact No.' name='guardian.motherContactNo' />
						</Col>
					</Row>

					{/* local guardian info */}
					<Divider>Local Guardian Information</Divider>
					<Row gutter={10} align={'top'}>
						<Col span={12}>
							<PHInput type='text' label='Name' name='localGuardian.name' />
						</Col>
						<Col span={12}>
							<PHInput type='text' label='Occupation' name='localGuardian.occupation' />
						</Col>
					</Row>
					<Row gutter={10} align={'top'}>
						<Col span={12}>
							<PHInput type='text' label='Contact No.' name='localGuardian.contactNo' />
						</Col>
						<Col span={12}>
							<PHInput type='text' label='Address' name='localGuardian.address' />
						</Col>
					</Row>

					{/* academic info */}
					<Divider>Academic Information</Divider>
					<Row gutter={10} align={'top'}>
						<Col span={12}>
							<PHSelect disabled={SisLoading} label='Semester' name='admissionSemester' options={semesterOptions} />
						</Col>
						<Col span={12}>
							<PHSelect
								disabled={DisLoading}
								label='Department'
								name='academicDepartment'
								options={departmentOptions}
							/>
						</Col>
					</Row>

					<Button type='primary' htmlType='submit' block disabled={isLoading}>
						{isLoading ? <Spin /> : 'Create Student'}
					</Button>
				</PHForm>
			</Col>
		</Row>
	);
};

export default CreateStudent;
