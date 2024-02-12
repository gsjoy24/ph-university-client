import Title from 'antd/es/typography/Title';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';

const CreateFaculty = () => {
	const onsSubmit = (values: any) => {
		console.log(values);
	};
	return (
		<>
			<Title level={2}>Create Faculty</Title>
			<PHForm onSubmit={onsSubmit}>
				<PHInput type='text' label='Student Name' name='facultyName' />
			</PHForm>
		</>
	);
};

export default CreateFaculty;
