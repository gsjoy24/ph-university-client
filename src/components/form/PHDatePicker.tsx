import { DatePicker, Form } from 'antd';
import { Controller } from 'react-hook-form';
import { MdErrorOutline } from 'react-icons/md';

type TDatePickerProps = {
	name: string;
	label?: string;
	placeholder?: string;
};

const PHDatePicker = ({ name, label, placeholder }: TDatePickerProps) => {
	return (
		<div>
			<Controller
				name={name}
				render={({ field, fieldState: { error } }) => (
					<Form.Item label={label}>
						<DatePicker {...field} id={name} placeholder={`Select ${label}`} size='large' style={{ width: '100%' }} />
						{error && (
							<small style={{ color: 'red', display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
								<MdErrorOutline size={14} />
								{error.message}
							</small>
						)}
					</Form.Item>
				)}
			/>
		</div>
	);
};

export default PHDatePicker;
