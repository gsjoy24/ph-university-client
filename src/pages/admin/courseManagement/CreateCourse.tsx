import { Button, Col, Row, Spin } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import PHTitle from '../../../components/PHTitle';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';

import { useAddCourseMutation, useGetAllCoursesQuery } from '../../../redux/features/admin/courseManagement.api';

import { TResponse } from '../../../types/global.type';

const CreateCourse = () => {
	const [addCourse, { isLoading }] = useAddCourseMutation();
	const { data: SData, isLoading: SisLoading } = useGetAllCoursesQuery([{ name: 'sort', value: 'code' }]);

	const courseOptions = SData?.data?.map((course) => ({
		label: `${course?.title} - ${course?.code}`,
		value: course?._id
	}));

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const modifiedData = {
			...data,
			code: Number(data.code),
			credits: Number(data.credits),
			preRequisiteCourses: data.preRequisiteCourses?.map((course: string) => ({
				course: course
			}))
		};

		try {
			const res = (await addCourse(modifiedData)) as TResponse<any>;
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
				<PHTitle title='Create Course' />
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
						<Col span={12}>
							<PHSelect
								label='Pre Requisite Courses (Optional for some courses)'
								name='preRequisiteCourses'
								mode='multiple'
								options={courseOptions}
							/>
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
