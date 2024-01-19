import Sider from 'antd/es/layout/Sider';
import sidebarItemsGenerator from '../../utils/sidebarItemsGenerator';
import adminPaths from '../../routes/admin.routes';
import { Menu } from 'antd';

const Sidebar = () => {
	return (
		<Sider breakpoint='lg' collapsedWidth='0'>
			<div style={{ height: '2rem', textAlign: 'center', color: 'white', marginTop: '20px' }}>
				<h1>PH University</h1>
			</div>
			<Menu theme='dark' mode='inline' defaultSelectedKeys={['4']} items={sidebarItemsGenerator(adminPaths, 'admin')} />
		</Sider>
	);
};

export default Sidebar;
