import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';
import { MdErrorOutline } from 'react-icons/md';

type TInputProps = {
	name: string;
	type: string;
	label?: string;
	defaultValue?: string;
	placeholder?: string;
};

const PHInput = ({ name, type, label, defaultValue, placeholder }: TInputProps) => {
	return (
		<div>
			<Controller
				name={name}
				render={({ field, fieldState: { error } }) => (
					<Form.Item label={label}>
						<Input
							{...field}
							type={type}
							id={name}
							placeholder={placeholder || label}
							size='large'
							defaultValue={defaultValue}
							className='w-full shadow-sm border-gray-500'
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
		</div>
	);
};

export default PHInput;
