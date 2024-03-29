import { Button, Flex, Modal, Popover, Table, Tag } from 'antd';
import { FilterDropdownProps } from 'antd/es/table/interface';
import { useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineUserAdd } from 'react-icons/ai';
import { toast } from 'sonner';
import PHForm from '../../../components/form/PHForm';
import PHSelect from '../../../components/form/PHSelect';
import { useGetAllAcademicFacultiesQuery } from '../../../redux/features/admin/academicManagement.api';
import { useAssignFacultiesMutation, useGetAllCoursesQuery } from '../../../redux/features/admin/courseManagement.api';
import { useGetAllFacultiesQuery } from '../../../redux/features/admin/userManagement.api';
import { TCourse, TFaculty, TResponse } from '../../../types';
import formatDate from '../../../utils/formatDate';

const column = [
	{
		title: 'Index',
		render(_text: string, _record: any, index: number) {
			return <div>{index + 1}</div>;
		}
	},
	{
		title: 'Title',
		dataIndex: 'title'
	},
	{
		title: 'Prefix',
		dataIndex: 'prefix'
	},
	{
		title: 'Code',
		dataIndex: 'code'
	},
	{
		title: 'Credits',
		dataIndex: 'credits'
	},
	{
		title: 'Pre Req. Courses',
		dataIndex: 'preRequisiteCourses',
		render(preRequisiteCourses: any[]) {
			return (
				<div>
					{preRequisiteCourses?.map((obj) => (
						<Tag key={obj.course._id} color='blue'>
							{obj.course.title}
						</Tag>
					))}
				</div>
			);
		}
	},
	{
		title: 'Created At',
		dataIndex: 'createdAt',
		render(date: string) {
			return <div>{formatDate(date)}</div>;
		}
	},
	{
		title: 'Action',
		render: (course: TCourse) => (
			<Flex gap={5}>
				<AddFacultyModal course={course} />
				<Popover content='Update'>
					<Button type='dashed' icon={<AiOutlineEdit size={20} />} />
				</Popover>
				<Popover content='Delete'>
					<Button type='dashed' danger icon={<AiOutlineDelete size={18} />} />
				</Popover>
			</Flex>
		)
	}
];

const Courses = () => {
	const { data, isFetching } = useGetAllCoursesQuery([{ name: 'sort', value: 'code' }]);
	const tableData = data?.data || [];

	return (
		<>
			<h1
				style={{
					marginBottom: '20px'
				}}
			>
				All Academic Faculties
			</h1>
			<Table loading={isFetching} columns={column} dataSource={tableData} />
		</>
	);
};

const AddFacultyModal = ({ course }: { course: TCourse }) => {
	const [openModal, setOpenModal] = useState(false);
	const { data } = useGetAllFacultiesQuery([{ name: 'sort', value: 'fullName' }]);

	const facultyOptions = data?.data?.map((faculty) => ({
		label: faculty?.fullName,
		value: faculty?._id
	}));

	const [assignFaculties, { isLoading }] = useAssignFacultiesMutation();
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		console.log({
			courseId: course._id,
			faculties: data.faculties
		});
		try {
			const res = (await assignFaculties({
				courseId: course._id,
				faculties: data.faculties
			})) as TResponse<any>;
			if (res?.data?.message) {
				setOpenModal(false);
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
		<>
			<Popover content='Add Faculty'>
				<Button type='dashed' onClick={() => setOpenModal(true)} icon={<AiOutlineUserAdd size={20} />} />
			</Popover>

			<Modal
				title={`Add Faculty to ${course?.title} - ${course?.code}`}
				centered
				open={openModal}
				onCancel={() => setOpenModal(false)}
				footer=''
			>
				<PHForm onSubmit={onSubmit}>
					<PHSelect label='Faculty' name='faculties' options={facultyOptions} mode='multiple' />
					<Button type='dashed' htmlType='submit' loading={isLoading} disabled={isLoading}>
						Add Faculty
					</Button>
				</PHForm>
			</Modal>
		</>
	);
};
export default Courses;
