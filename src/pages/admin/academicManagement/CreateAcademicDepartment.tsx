import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Col, Flex, Spin } from 'antd';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import {
	useAddAcademicDepartmentMutation,
	useGetAllAcademicFacultiesQuery
} from '../../../redux/features/admin/academicManagement.api';
import { academicDepartmentSchema } from '../../../schemas/academicManagement.schema';
import { TAcademicDepartment, TResponse } from '../../../types';

const CreateAcademicDepartment = () => {
	const { data: academicFaculties, isFetching } = useGetAllAcademicFacultiesQuery(null);

	const facultyOptions = academicFaculties?.data?.map(({ _id, name }) => ({
		label: name,
		value: _id
	}));

	const [AddAcademicDepartment, { isLoading }] = useAddAcademicDepartmentMutation();
	const onSubmit = async (data: FieldValues) => {
		try {
			const res = (await AddAcademicDepartment(data)) as TResponse<TAcademicDepartment>;

			if (res?.data?.message) {
				toast.success(res?.data?.message);
			} else {
				toast.error(res?.error?.data?.message);
			}
		} catch (error) {
			console.log('error:', error);
			toast.error('Something went wrong');
		}
	};

	return (
		<Flex justify='center' align='center' style={{ minHeight: '85vh' }}>
			<Col span={12}>
				<h1 style={{ marginBottom: '15px' }}>Create new academic department</h1>
				<PHForm onSubmit={onSubmit} resolver={zodResolver(academicDepartmentSchema)}>
					<PHInput type='text' label='Academic Department Name' name='name' defaultValue='Department of ' />
					<PHSelect options={facultyOptions} label='Academic faculty' name='academicFaculty' />

					<Button type='primary' htmlType='submit' disabled={isLoading && isFetching} block>
						{isLoading ? <Spin /> : 'Create'}
					</Button>
				</PHForm>
			</Col>
		</Flex>
	);
};

export default CreateAcademicDepartment;
