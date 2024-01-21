import { Input } from 'antd';
import { Controller } from 'react-hook-form';

type TInputProps = {
	name: string;
	type: string;
	label: string;
};

const PHInput = ({ name, type, label }: TInputProps) => {
	return (
		<div>
			{label && (
				<label style={{ marginBottom: '10px', display: 'inline-block' }} htmlFor={name}>
					{label}:
				</label>
			)}
			<Controller
				name={name}
				render={({ field }) => (
					<Input {...field} variant='filled' type={type} id={name} placeholder={name.toUpperCase()} />
				)}
			/>
		</div>
	);
};

export default PHInput;
