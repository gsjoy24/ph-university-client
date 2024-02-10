import { Select } from 'antd';

const CreateAcademicFaculty = () => {
	return (
		<div>
			<Select
				defaultValue='lucy'
				style={{ width: 120 }}
				// onChange={handleChange}
				options={[
					{ value: 'jack', label: 'Jack' },
					{ value: 'lucy', label: 'Lucy' },
					{ value: 'Yiminghe', label: 'yiminghe' },
					{ value: 'disabled', label: 'Disabled', disabled: true }
				]}
			/>
		</div>
	);
};

export default CreateAcademicFaculty;
