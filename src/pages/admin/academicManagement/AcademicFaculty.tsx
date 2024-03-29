import { Button, Flex, Table } from 'antd';
import { FilterDropdownProps } from 'antd/es/table/interface';
import { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useGetAllAcademicFacultiesQuery } from '../../../redux/features/admin/academicManagement.api';
import formatDate from '../../../utils/formatDate';

const column = [
	{
		title: 'Index',
		render(_text: string, _record: any, index: number) {
			return <div>{index + 1}</div>;
		}
	},
	{
		title: 'Name',
		dataIndex: 'name',
		filters: [
			{
				text: 'Autumn',
				value: 'Autumn'
			},
			{
				text: 'Fall',
				value: 'Fall'
			},
			{
				text: 'Summer',
				value: 'Summer'
			}
		]
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
				<Button type='primary' icon={<AiOutlineEdit />} />
				<Button type='primary' danger icon={<AiOutlineDelete />} />
			</Flex>
		)
	}
];

const AcademicFaculty = () => {
	const { data, isFetching } = useGetAllAcademicFacultiesQuery(null);
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

export default AcademicFaculty;
