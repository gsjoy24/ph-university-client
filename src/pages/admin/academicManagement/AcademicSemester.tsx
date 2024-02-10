import { useGetAllSemestersQuery } from '../../../redux/features/admin/academicManagement.api';

const AcademicSemester = () => {
	const { data } = useGetAllSemestersQuery(null);
	console.log(data);
	return (
		<div>
			<h1>This is AcademicSemester component</h1>
		</div>
	);
};

export default AcademicSemester;
