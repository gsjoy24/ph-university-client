import { Button } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';

const CreateAcademicSemester = () => {
	const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
		console.log(data);
	};
	return (
		<PHForm onSubmit={onSubmit}>
			<h1>This is CreateAcademicSemester component</h1>
			<PHInput name='name' type='text' label='name' />
			<Button type='primary' htmlType='submit'>
				Submit
			</Button>
		</PHForm>
	);
};

export default CreateAcademicSemester;
