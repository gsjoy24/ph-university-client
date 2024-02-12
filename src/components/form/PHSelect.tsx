import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';
import { MdErrorOutline } from 'react-icons/md';

type TPHSelectProps = {
	label: string;
	name: string;
	options?: { value: string | undefined; label: string | undefined; disabled?: boolean }[] | undefined;
	disabled?: boolean;
};

const PHSelect = ({ label, name, options, disabled }: TPHSelectProps) => {
	return (
		<Controller
			name={name}
			render={({ field, fieldState: { error } }) => (
				<Form.Item label={label} style={{ marginBottom: '10px', width: '100%' }}>
					<Select {...field} options={options} placeholder={`Select ${label}`} size='large' disabled={disabled} />
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
