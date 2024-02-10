import { Button, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { logOut } from '../../redux/features/auth/authSlice';
import Sidebar from './Sidebar';

const { Content } = Layout;

const MainLayout = () => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sidebar />
			<Layout>
				<Content style={{ margin: '24px 16px 0' }}>
					<div
						style={{
							padding: 24,
							minHeight: 360
						}}
					>
						<Outlet />
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default MainLayout;
