import { Button, Flex, Table, TableColumnsType, TableProps } from 'antd';
import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useGetAllSemestersQuery } from '../../../redux/features/admin/academicManagement.api';
import { TAcademicSemester } from '../../../types';
import formatDate from '../../../utils/formatDate';

type TDataType = Pick<TAcademicSemester, 'name' | 'year' | 'startMonth' | 'endMonth' | 'createdAt'>;

type FilterValue = {
	name: string;
	value: string;
};
const columns: TableColumnsType<TDataType> = [
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
				<Button type='primary' icon={<AiOutlineEdit />} />
				<Button type='primary' danger icon={<AiOutlineDelete />} />
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
					.map(({ _id, name, startMonth, endMonth, year, createdAt }) => {
						return {
							key: _id,
							name,
							startMonth,
							endMonth,
							year,
							createdAt
						};
					})
			: [];

	return <Table loading={isFetching} columns={columns} dataSource={tableData} onChange={onChange} />;
};

export default AcademicSemester;
