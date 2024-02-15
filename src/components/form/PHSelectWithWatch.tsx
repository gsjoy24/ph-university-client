import { Form, Select } from 'antd';
import { useEffect } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { MdErrorOutline } from 'react-icons/md';

type TPHSelectProps = {
	label: string;
	name: string;
	options?: { value: string | undefined; label: string | undefined; disabled?: boolean }[] | undefined;
	mode?: 'multiple' | undefined;
	onValueChange?: (value: string | undefined) => void;
	disabled?: boolean;
};

const PHSelectWithWatch = ({ label, name, options, mode, onValueChange, disabled }: TPHSelectProps) => {
	const { control } = useFormContext();
	const selectedValue = useWatch({
		control,
		name
	});
	useEffect(() => {
		if (onValueChange) {
			onValueChange(selectedValue);
		}
	}, [selectedValue, onValueChange]);
	return (
		<Controller
			name={name}
			render={({ field, fieldState: { error } }) => (
				<Form.Item label={label} style={{ marginBottom: '10px', width: '100%' }}>
					<Select
						{...field}
						mode={mode}
						options={options}
						placeholder={`Select ${label}`}
						size='large'
						disabled={disabled}
						style={{ boxShadow: ' 0px 0px 5px 0px rgba(0,0,0,0.1)' }}
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

export default PHSelectWithWatch;
