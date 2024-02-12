import { Button, Flex, Table } from 'antd';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useGetAllAcademicDepartmentsQuery } from '../../../redux/features/admin/academicManagement.api';
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
		dataIndex: 'name'
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

const AcademicDepartment = () => {
	const { data, isFetching } = useGetAllAcademicDepartmentsQuery(null);
	const tableData = data?.data || [];

	return (
		<>
			<h1
				style={{
					marginBottom: '20px'
				}}
			>
				All Academic Departments
			</h1>

			<Table loading={isFetching} columns={column} dataSource={tableData} />
		</>
	);
};

export default AcademicDepartment;
