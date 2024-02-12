import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Col, Flex, Spin } from 'antd';
import { FieldValues } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import { useAddAcademicDepartmentMutation } from '../../../redux/features/admin/academicManagement.api';
import { academicDepartmentSchema } from '../../../schemas/academicManagement.schema';

const CreateAcademicDepartment = () => {
	const [AddAcademicDepartment, { isLoading }] = useAddAcademicDepartmentMutation();
	const onSubmit = async (data: FieldValues) => {
		console.log(data);
		// try {
		// 	const res = (await AddAcademicDepartment(data)) as TResponse<TAcademicDepartment>;

		// 	if (res?.data?.message) {
		// 		toast.success(res?.data?.message);
		// 	} else {
		// 		toast.error(res?.error?.data?.message);
		// 	}
		// } catch (error) {
		// 	console.log('error:', error);
		// 	toast.error('Something went wrong');
		// }
	};

	return (
		<Flex justify='center' align='center' style={{ minHeight: '85vh' }}>
			<Col span={10}>
				<h1 style={{ marginBottom: '15px' }}>Create new academic faculty</h1>
				<PHForm onSubmit={onSubmit} resolver={zodResolver(academicDepartmentSchema)}>
					{/* <PHInput type='text' label='Academic Faculty Name' name='name' defaultValue='Faculty of ' /> */}

					<PHInput type='text' label='Academic Department Name' name='name' />

					<Button type='primary' htmlType='submit' disabled={isLoading} block>
						{isLoading ? <Spin /> : 'Create'}
					</Button>
				</PHForm>
			</Col>
		</Flex>
	);
};

export default CreateAcademicDepartment;
