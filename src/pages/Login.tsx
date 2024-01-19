import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';

const Login = () => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: 'A-0001',
			password: 'securePassword123'
		}
	});
	const [login, { data, error, isLoading }] = useLoginMutation();
	const onSubmit = (data: any) => {
		login(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor='id'>ID:</label>
				<input type='text' id='id' {...register('id')} />
			</div>
			<div>
				<label htmlFor='password'>Password:</label>
				<input type='text' id='password' {...register('password')} />
			</div>
			<Button type='text' htmlType='submit'>
				Login
			</Button>
		</form>
	);
};

export default Login;
