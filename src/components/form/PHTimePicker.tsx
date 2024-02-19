import { Form, TimePicker } from 'antd';
import { Controller } from 'react-hook-form';
import { MdErrorOutline } from 'react-icons/md';

type TPHSelectProps = {
	label: string;
	name: string;
};

const PHTimePicker = ({ label, name }: TPHSelectProps) => {
	return (
		<Controller
			name={name}
			render={({ field, fieldState: { error } }) => (
				<Form.Item label={label} style={{ marginBottom: '10px', width: '100%' }}>
					<TimePicker
						{...field}
						size='large'
						placeholder={`Select ${label}`}
						style={{ width: '100%' }}
						format='HH:mm'
					/>
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

export default PHTimePicker;
