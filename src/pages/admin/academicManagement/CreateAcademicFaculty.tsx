import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Col, Flex, Spin } from 'antd';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import { useAddAcademicFacultyMutation } from '../../../redux/features/admin/academicManagement.api';
import { academicFacultySchema } from '../../../schemas/academicManagement.schema';
import { TAcademicFaculty, TResponse } from '../../../types';

const CreateAcademicFaculty = () => {
	const [addAcademicFaculty, { isLoading }] = useAddAcademicFacultyMutation();
	const onSubmit = async (data: FieldValues) => {
		try {
			const res = (await addAcademicFaculty(data)) as TResponse<TAcademicFaculty>;

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
			<Col span={10}>
				<h1 style={{ marginBottom: '15px' }}>Create new academic faculty</h1>
				<PHForm onSubmit={onSubmit} resolver={zodResolver(academicFacultySchema)}>
					<PHInput type='text' label='Academic Faculty Name' name='name' defaultValue='Faculty of ' />
					<Button type='primary' htmlType='submit' disabled={isLoading} block>
						{isLoading ? <Spin /> : 'Create'}
					</Button>
				</PHForm>
			</Col>
		</Flex>
	);
};

export default CreateAcademicFaculty;
