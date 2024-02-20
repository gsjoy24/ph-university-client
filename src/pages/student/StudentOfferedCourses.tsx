import { Button } from 'antd';
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

	return (
		<div>
			<PHTitle title='Offered Courses' />
			<div className='mt-12'>
				{modifiedData.map((course: any, index: number) => (
					<div key={index} className='mb-6 border border-gray-600 p-3 w-max rounded-sm'>
						<h1 className='text-2xl font-bold mb-3'>{course.courseTitle}</h1>

						<div>
							{course.sections.map((section: any, index: number) => (
								<div key={index} className='mt-3'>
									<p>Section: {section.section}</p>
									<p>
										Days:{' '}
										{section.days.map((day: string, index: number) => (
											<span key={index} className='mr-2'>
												{day}
											</span>
										))}
									</p>
									<p>
										Time: {section.startTime} - {section.endTime}
									</p>
								</div>
							))}
						</div>
						<Button type='primary' className='mt-4'>
							Enroll
						</Button>
					</div>
				))}
			</div>
		</div>
	);
};

export default StudentOfferedCourses;
