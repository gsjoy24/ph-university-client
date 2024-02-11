import { Table, TableColumnsType, TableProps } from 'antd';
import { useGetAllSemestersQuery } from '../../../redux/features/admin/academicManagement.api';
interface DataType {
	key: React.Key;
	name: string;
	age: number;
	address: string;
}

const AcademicSemester = () => {
	const columns: TableColumnsType<DataType> = [
		{
			title: 'Name',
			dataIndex: 'name'
		},
		{
			title: 'Year',
			dataIndex: 'year'
		},
		{
			title: 'Start Month',
			dataIndex: 'startMonth'
		},
		{
			title: 'End Month',
			dataIndex: 'endMonth'
		}
	];

	const data = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park'
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 1 Lake Park'
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'Sydney No. 1 Lake Park'
		},
		{
			key: '4',
			name: 'Jim Red',
			age: 32,
			address: 'London No. 2 Lake Park'
		}
	];

	const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
		console.log('params', pagination, filters, sorter, extra);
	};
	const { data: allSemesters } = useGetAllSemestersQuery(null);

	const tableData = allSemesters?.data.map(({ _id, name, startMonth, endMonth, year }) => {
		return {
			key: _id,
			name,
			startMonth,
			endMonth,
			year
		};
	});

	const allSemestersData = allSemesters?.data;
	console.log(allSemesters);
	return <Table columns={columns} dataSource={tableData} onChange={onChange} />;
};

export default AcademicSemester;
