import { Button, Col, Row } from 'antd';
import { useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';
import PHTitle from '../components/PHTitle';
import PHForm from '../components/form/PHForm';
import PHInput from '../components/form/PHInput';

const ChangePassword = () => {
	const [err, setErr] = useState('');

	const onSubmit = (data: any) => {
		setErr('');
		if (data.newPassword !== data.confirmPassword) {
			setErr('New password and confirm password do not match! Please try again.');
			return;
		}
	};
	return (
		<div>
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
								<Button type='primary' htmlType='submit' block>
									Change Password
								</Button>
							</Col>
						</Row>
					</PHForm>
				</Col>
			</Row>
		</div>
	);
};

export default ChangePassword;
