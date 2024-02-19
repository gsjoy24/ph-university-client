import { Button, Flex, Select } from 'antd';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PHForm from '../components/form/PHForm';
import PHInput from '../components/form/PHInput';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { setUser } from '../redux/features/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';
import { TUser } from '../types';
import { verifyToken } from '../utils/verifyToken';

const Login = () => {
	const defaultValues = { userId: '2024010001', password: 'password123' };
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [login, { isLoading }] = useLoginMutation();

	const onSubmit = async (data: FieldValues) => {
		const toastId = toast.loading('Logging in...');
		try {
			const res = await login(data).unwrap();
			const userInfo = verifyToken(res.data.accessToken) as TUser;

			// Save user info and token to redux store
			dispatch(setUser({ user: userInfo, token: res.data.accessToken }));
			toast.success('Logged in successfully!', { id: toastId, duration: 2000 });

			// Redirect to change password page if user logged in for the first time and needs to change password
			if (res.data.needsPasswordChange) {
				navigate('/change-password');
			} else {
				navigate(`/${userInfo.role}/dashboard`);
			}
		} catch (error: any) {
			console.log('error', error);
			toast.error(error?.data?.message, { id: toastId, duration: 2000 });
		}
	};
	return (
		<Flex justify='center' align='center'>
			<PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
				<PHInput label='ID' name='userId' type='text' />
				<PHInput label='Password' name='password' type='password' />
				<br />
				<Button type='dashed' htmlType='submit'>
					{isLoading ? 'Loading...' : 'Login'}
				</Button>
			</PHForm>
		</Flex>
	);
};

export default Login;
