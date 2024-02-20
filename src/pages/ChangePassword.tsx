import { Button, Col, Row } from 'antd';
import { useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { MdErrorOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PHTitle from '../components/PHTitle';
import PHForm from '../components/form/PHForm';
import PHInput from '../components/form/PHInput';
import { useChangePasswordMutation } from '../redux/features/admin/userManagement.api';
import { logOut } from '../redux/features/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';

const ChangePassword = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [err, setErr] = useState('');
	const [changePassword, { isLoading }] = useChangePasswordMutation();

	const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
		setErr('');
		if (data.newPassword !== data.confirmPassword) {
			setErr('New password and confirm password do not match! Please try again.');
			return;
		}

		const res = (await changePassword(data)) as any;

		if (res?.data?.success) {
			toast.success(res?.data?.message);
			dispatch(logOut());
			navigate('/login');
		} else {
			setErr(res?.error?.data?.message);
			toast.error(res?.error?.data?.message);
		}
	};
	return (
		<Row justify='center' align='middle' style={{ height: '90vh' }}>
			<Col span={24} className='flex justify-center'>
				<PHTitle title='Change Password' />
			</Col>
			<Col span={24} className='flex justify-center'>
				<PHForm onSubmit={onSubmit}>
					<Row gutter={[16, 16]}>
						<Col span={24}>
							<PHInput label='Old Password' name='oldPassword' type='password' />
						</Col>

						<Col span={24}>
							<PHInput label='New Password' name='newPassword' type='password' />
						</Col>
						<Col span={24}>
							<PHInput label='Confirm Password' name='confirmPassword' type='password' />
							{err && (
								<small style={{ color: 'red', display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
									<MdErrorOutline size={14} />
									{err}
								</small>
							)}
						</Col>
						<Col span={24}>
							<Button loading={isLoading} disabled={isLoading} type='primary' htmlType='submit' block>
								Change Password
							</Button>
						</Col>
					</Row>
				</PHForm>
			</Col>
		</Row>
	);
};

export default ChangePassword;
