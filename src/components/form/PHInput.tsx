import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

type TInputProps = {
	name: string;
	type: string;
	label: string;
};

const PHInput = ({ name, type, label }: TInputProps) => {
	return (
		<div>
			<Controller
				name={name}
				render={({ field }) => (
					<Form.Item label={label}>
						<Input {...field} type={type} id={name} placeholder={name} size='large' />
					</Form.Item>
				)}
			/>
		</div>
	);
};

export default PHInput;
