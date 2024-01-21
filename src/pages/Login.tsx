import { Button } from 'antd';
import { FieldValues, useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { TUser } from '../types';
import { toast } from 'sonner';
import PHForm from '../components/form/PHForm';
import PHInput from '../components/form/PHInput';

const Login = () => {
	const defaultValues = { id: 'A-0001', password: 'securePassword123' };
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [login, { isLoading }] = useLoginMutation();

	const onSubmit = async (data: FieldValues) => {
		const toastId = toast.loading('Logging in...');
		try {
			const res = await login(data).unwrap();
			const userInfo = verifyToken(res.data.accessToken) as TUser;
			dispatch(setUser({ user: userInfo, token: res.data.accessToken }));
			toast.success('Logged in successfully!', { id: toastId, duration: 2000 });
			navigate(`/${userInfo.role}/dashboard`);
		} catch (error) {
			toast.error('Something went wrong!', { id: toastId, duration: 2000 });
		}
	};
	return (
		<PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
			<PHInput label='ID' name='id' type='text' />
			<PHInput label='Password' name='password' type='text' />
			<br />
			<Button type='dashed' htmlType='submit'>
				{isLoading ? 'Loading...' : 'Login'}
			</Button>
		</PHForm>
	);
};

export default Login;
