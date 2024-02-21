import { Button, Col, Row } from 'antd';
import Item from 'antd/es/list/Item';
import PHTitle from '../../components/PHTitle';
import { useGetAllOfferedCoursesQuery } from '../../redux/features/student/studentCourseManagement.api.';

const StudentOfferedCourses = () => {
	const { data: offeredCourseData } = useGetAllOfferedCoursesQuery([
		{
			name: 'sort',
			value: 'section'
		}
	]);

	const singleObject = offeredCourseData?.data?.reduce((acc, item: any) => {
		const key = item?.course?.title;
		acc[key] = acc[key] || { courseTitle: key, sections: [] };
		acc[key].sections.push({
			_id: item?._id,
			section: item?.section,
			days: item?.days,
			startTime: item?.startTime,
			endTime: item?.endTime
		});
		return acc;
	}, {} as any);

	const modifiedData = Object.values(singleObject || {});

	const handleEnroll = async (id) => {
		const enrollData = {
			offeredCourse: id
		};

		const res = await enroll(enrollData);
		console.log(res);
	};

	if (!modifiedData.length) {
		return <p>No available courses</p>;
	}

	return (
		<Row gutter={[0, 20]}>
			{modifiedData.map((item, index) => {
				return (
					<Col span={24} style={{ border: 'solid #d4d4d4 2px' }} key={`daf${index}`}>
						<div style={{ padding: '10px' }}>
							<h2>{item.courseTitle}</h2>
						</div>
						<div>
							{item.sections.map((section, index) => {
								return (
									<Row
										justify='space-between'
										align='middle'
										style={{ borderTop: 'solid #d4d4d4 2px', padding: '10px' }}
										key={`daaf${index}`}
									>
										<Col span={5}>Section: {section.section} </Col>
										<Col span={5}>
											days:{' '}
											{section.days.map((day, index) => (
												<span key={`day-${index}`}> {day} </span>
											))}
										</Col>
										<Col span={5}>Start Time: {section.startTime} </Col>
										<Col span={5}>End Time: {section.endTime} </Col>
										<Button onClick={() => handleEnroll(section._id)}>Enroll</Button>
									</Row>
								);
							})}
						</div>
					</Col>
				);
			})}
		</Row>
	);
};

export default StudentOfferedCourses;
