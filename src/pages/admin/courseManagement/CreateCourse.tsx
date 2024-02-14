import { Button, Col, Row, Spin } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import PHTitle from '../../../components/PHTitle';
import PHDatePicker from '../../../components/form/PHDatePicker';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import { semesterStatusOptions } from '../../../constants/semester';
import { useGetAllSemestersQuery } from '../../../redux/features/admin/academicManagement.api';
import { useRegisterSemesterMutation } from '../../../redux/features/admin/courseManagement.api';

import { TSemesterRegistration } from '../../../types';
import { TResponse } from '../../../types/global.type';

const CreateCourse = () => {
	const [registerSemester, { isLoading }] = useRegisterSemesterMutation();
	const { data: SData, isLoading: SisLoading } = useGetAllSemestersQuery([{ name: 'sort', value: 'year' }]);

	const semesterOptions = SData?.data?.map((semester) => ({
		label: `${semester?.name} - ${semester?.year}`,
		value: semester?._id
	}));

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const { minCredit, maxCredit, ...restData } = data;
		const modifiedData = {
			...restData,
			minCredit: parseInt(minCredit),
			maxCredit: parseInt(maxCredit)
		};

		try {
			const res = (await registerSemester(modifiedData)) as TResponse<TSemesterRegistration>;
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
		<Row justify='center'>
			<Col span={20}>
				<PHTitle title='Create Academic Semester' />
			</Col>
			<Col span={20}>
				<h1
					style={{
						marginBottom: '20px'
					}}
				></h1>
				<PHForm onSubmit={onSubmit}>
					<Row gutter={10}>
						<Col span={12}>
							<PHInput type='text' label='Title' name='title' />
						</Col>
						<Col span={12}>
							<PHInput type='text' label='Prefix' name='prefix' />
						</Col>
						<Col span={12}>
							<PHInput type='number' label='Code' name='code' />
						</Col>
						<Col span={12}>
							<PHInput type='number' label='Credits' name='credits' />
						</Col>
					</Row>

					<Button block type='primary' htmlType='submit' disabled={isLoading || SisLoading}>
						{isLoading ? <Spin /> : 'Create'}
					</Button>
				</PHForm>
			</Col>
		</Row>
	);
};

export default CreateCourse;
