import Sider from 'antd/es/layout/Sider';
import sidebarItemsGenerator from '../../utils/sidebarItemsGenerator';
import adminPaths from '../../routes/admin.routes';
import { Menu } from 'antd';
import { userRoles } from '../../utils/userRoles';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentUser } from '../../redux/features/auth/authSlice';

const Sidebar = () => {
	const user = useAppSelector(selectCurrentUser);
	let sidebarItems;

	switch (user!.role) {
		case userRoles.ADMIN:
			sidebarItems = sidebarItemsGenerator(adminPaths, userRoles.ADMIN);
			break;
		case userRoles.FACULTY:
			sidebarItems = sidebarItemsGenerator(facultyPaths, userRoles.FACULTY);
			break;
		case userRoles.STUDENT:
			sidebarItems = sidebarItemsGenerator(studentPaths, userRoles.STUDENT);
			break;

		default:
			break;
	}
	return (
		<Sider breakpoint='lg' collapsedWidth='0'>
			<div style={{ height: '2rem', textAlign: 'center', color: 'white', marginTop: '20px' }}>
				<h1>PH University</h1>
			</div>
			<Menu theme='dark' mode='inline' defaultSelectedKeys={['4']} items={sidebarItems} />
		</Sider>
	);
};

export default Sidebar;
