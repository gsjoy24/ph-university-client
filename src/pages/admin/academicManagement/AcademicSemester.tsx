import { Button, Flex, Table, TableColumnsType, TableProps } from 'antd';
import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useGetAllSemestersQuery } from '../../../redux/features/admin/academicManagement.api';
import { TAcademicSemester } from '../../../types';

type TDataType = Pick<TAcademicSemester, 'name' | 'year' | 'startMonth' | 'endMonth'>;

type FilterValue = {
	name: string;
	value: string;
};
const columns: TableColumnsType<TDataType> = [
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
		title: 'Year',
		dataIndex: 'year',
		filters: [
			{
				text: '2024',
				value: '2024'
			},
			{
				text: '2025',
				value: '2025'
			},
			{
				text: '2026',
				value: '2026'
			},
			{
				text: '2027',
				value: '2027'
			},
			{
				text: '2028',
				value: '2028'
			}
		]
	},
	{
		title: 'Start Month',
		dataIndex: 'startMonth'
	},
	{
		title: 'End Month',
		dataIndex: 'endMonth'
	},
	{
		title: 'Action',
		key: 'action',
		render: () => (
			<Flex>
				<Button type='text' size='small'>
					<AiOutlineEdit size={20} />
				</Button>
				<Button type='text' size='small'>
					<AiOutlineDelete size={18} />
				</Button>
			</Flex>
		)
	}
];

const AcademicSemester = () => {
	const [params, setParams] = useState([] as FilterValue[]);
	const { data: allSemesters, isFetching } = useGetAllSemestersQuery(params);

	const onChange: TableProps<TDataType>['onChange'] = (pagination, filters, sorter, extra) => {
		if (extra.action === 'filter') {
			const queryArray: FilterValue[] = [];
			filters.name?.forEach((item) =>
				queryArray.push({
					name: 'name',
					value: item as string
				})
			);
			filters.year?.forEach((item) =>
				queryArray.push({
					name: 'year',
					value: item as string
				})
			);

			setParams(queryArray);
		}
	};

	const tableData =
		allSemesters && allSemesters.data
			? allSemesters.data
					.filter(({ _id }) => _id !== undefined)
					.map(({ _id, name, startMonth, endMonth, year }) => {
						return {
							key: _id,
							name,
							startMonth,
							endMonth,
							year
						};
					})
			: [];

	return <Table loading={isFetching} columns={columns} dataSource={tableData} onChange={onChange} />;
};

export default AcademicSemester;
