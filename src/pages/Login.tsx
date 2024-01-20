import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: 'A-0001',
			password: 'securePassword123'
		}
	});
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [login, { data, error, isLoading }] = useLoginMutation();

	const onSubmit = async (data: any) => {
		const res = await login(data).unwrap();
		const userInfo = verifyToken(res.data.accessToken);
		dispatch(setUser({ user: userInfo, token: res.data.accessToken }));

		navigate(`/${userInfo.role}/dashboard`);
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
			<Button type='dashed' htmlType='submit'>
				{isLoading ? 'Loading...' : 'Login'}
			</Button>
		</form>
	);
};

export default Login;
