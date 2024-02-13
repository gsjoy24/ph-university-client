import { Button, Flex, Pagination, Table, TableColumnsType } from 'antd';
import { useState } from 'react';
import { AiOutlineEdit, AiOutlineEye, AiOutlineStop } from 'react-icons/ai';
import { useGetAllStudentsQuery } from '../../../redux/features/admin/userManagement.api';
import { TMeta, TQueryParams, TStudent } from '../../../types';
import formatDate from '../../../utils/formatDate';

type TDataType = Pick<TStudent, 'fullName' | 'createdAt'>;

const columns: TableColumnsType<TDataType> = [
	{
		title: 'Index',
		render(_text: string, _record: any, index: number) {
			return <div>{index + 1}</div>;
		}
	},
	{
		title: 'Name',
		dataIndex: 'fullName'
	},
	{
		title: 'Created At',
		dataIndex: 'createdAt',
		render(text: string) {
			return <p>{formatDate(text)}</p>;
		}
	},
	{
		title: 'Action',
		key: 'action',
		render: () => (
			<Flex gap={5}>
				<Button type='dashed' icon={<AiOutlineEye />} />
				<Button type='dashed' icon={<AiOutlineEdit />} />
				<Button type='dashed' danger icon={<AiOutlineStop />} />
			</Flex>
		)
	}
];

const Students = () => {
	const [params, setParams] = useState<TQueryParams[]>([]);
	const [page, setPage] = useState<number>(1);

	const { data: allStudents, isFetching } = useGetAllStudentsQuery([
		{ name: 'limit', value: 3 },
		{ name: 'sort', value: 'id' },
		{ name: 'page', value: page }
	]);

	const metaData = allStudents?.meta as TMeta;

	const tableData =
		allStudents && allStudents.data
			? allStudents.data
					.filter(({ _id }) => _id !== undefined)
					.map(({ _id, fullName, createdAt }) => {
						return {
							key: _id,
							fullName,
							createdAt
						};
					})
			: [];

	return (
		<>
			<h1
				style={{
					marginBottom: '20px'
				}}
			>
				All Academic Semesters
			</h1>
			<Table loading={isFetching} columns={columns} dataSource={tableData} pagination={false} />
			<Pagination total={metaData?.total} pageSize={metaData?.limit} onChange={(value) => setPage(value)} />
		</>
	);
};

export default Students;
