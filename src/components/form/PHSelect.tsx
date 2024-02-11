import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';
import { MdErrorOutline } from 'react-icons/md';

type TPHSelectProps = {
	label: string;
	name: string;
	options: { value: string; label: string; disabled?: boolean }[];
};

const PHSelect = ({ label, name, options }: TPHSelectProps) => {
	return (
		<Controller
			name={name}
			render={({ field, fieldState: { error } }) => (
				<Form.Item label={label} style={{ marginBottom: '10px', width: '100%' }}>
					<Select style={{ width: '100%' }} {...field} options={options} placeholder={`Select ${name}`} size='large' />
					{error && (
						<small style={{ color: 'red', display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
							<MdErrorOutline size={14} />
							{error.message}
						</small>
					)}
				</Form.Item>
			)}
		/>
	);
};

export default PHSelect;
