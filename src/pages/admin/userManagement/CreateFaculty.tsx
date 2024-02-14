import { Button, Col, Divider, Form, Input, Row, Spin } from 'antd';
import { Controller, FieldValues, SubmitHandler } from 'react-hook-form';
import PHTitle from '../../../components/PHTitle';
import PHDatePicker from '../../../components/form/PHDatePicker';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import { bloodGroupOptions, genderOptions } from '../../../constants/global';
import { useGetAllAcademicDepartmentsQuery } from '../../../redux/features/admin/academicManagement.api';
import { useAddFacultyMutation } from '../../../redux/features/admin/userManagement.api';

const CreateFaculty = () => {
	const { data: DData, isLoading: DisLoading } = useGetAllAcademicDepartmentsQuery(null);
	const departmentOptions = DData?.data?.map((department) => ({
		label: department?.name,
		value: department?._id
	}));

	const [addFaculty, { isLoading }] = useAddFacultyMutation();
	const onsSubmit: SubmitHandler<FieldValues> = async (values) => {
		const formData = new FormData();
		const modifiedData = {
			password: 'password123',
			studentData: values
		};

		formData.append('data', JSON.stringify(modifiedData));
		formData.append('file', values.image);

		try {
			const res = await addFaculty(formData);
			if (res?.data?.success) {
				toast.success(res?.data?.message);
			} else {
				console.log(res);
				toast.error(res?.error?.message);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Row justify='center'>
			<Col span={24}>
				<PHTitle title='Create Faculty' />
				<PHForm onSubmit={onsSubmit}>
					<Divider>Personal Information</Divider>
					{/* name */}
					<Row gutter={10} align={'bottom'}>
						<Col span={8}>
							<PHInput type='text' label='Faculty Name' name='name.firstName' placeholder='first name' />
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

					{/* academic info */}
					<Divider>Academic Information</Divider>
					<Row gutter={10} align={'top'}>
						<Col span={12}>
							<PHInput type='text' label='Designation' name='designation' placeholder='exp. Professor' />
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
						{isLoading ? <Spin /> : 'Create Faculty'}
					</Button>
				</PHForm>
			</Col>
		</Row>
	);
};

export default CreateFaculty;
