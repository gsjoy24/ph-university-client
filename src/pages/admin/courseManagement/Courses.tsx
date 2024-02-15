import { Button, Flex, Modal, Popover, Table, Tag } from 'antd';
import { FilterDropdownProps } from 'antd/es/table/interface';
import { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineUserAdd } from 'react-icons/ai';
import { useGetAllAcademicFacultiesQuery } from '../../../redux/features/admin/academicManagement.api';
import { useGetAllCoursesQuery } from '../../../redux/features/admin/courseManagement.api';
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
			console.log('preRequisiteCourses:', preRequisiteCourses);
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
		render: (_text: string, _record: any) => (
			<Flex gap={5}>
				<AddFacultyModal />
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

const AddFacultyModal = () => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<Popover content='Assign Faculty'>
				<Button type='dashed' onClick={() => setOpenModal(true)} icon={<AiOutlineUserAdd size={20} />} />
			</Popover>

			<Modal
				title='Vertically centered modal dialog'
				centered
				open={openModal}
				onOk={() => setOpenModal(false)}
				onCancel={() => setOpenModal(false)}
			>
				<p>some contents...</p>
				<p>some contents...</p>
				<p>some contents...</p>
			</Modal>
		</>
	);
};
export default Courses;
