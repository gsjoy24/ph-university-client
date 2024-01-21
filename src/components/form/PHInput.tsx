import { useFormContext } from 'react-hook-form';
type TInputProps = {
	name: string;
	type: string;
	label: string;
};

const PHInput = ({ name, type, label }: TInputProps) => {
	const { register } = useFormContext();
	return (
		<>
			{label && <label htmlFor={name}>{label}:</label>}
			<input type={type} id={name} {...register(name)} />
		</>
	);
};

export default PHInput;
