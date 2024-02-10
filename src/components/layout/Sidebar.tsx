import { Button, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { AiOutlineLogout } from 'react-icons/ai';
import { logOut, selectCurrentUser } from '../../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import adminPaths from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';
import sidebarItemsGenerator from '../../utils/sidebarItemsGenerator';
import { userRoles } from '../../utils/userRoles';

const Sidebar = () => {
	const dispatch = useAppDispatch();
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
		<Sider
			width={'220px'}
			breakpoint='lg'
			collapsedWidth='0'
			style={{
				height: '100vh',
				position: 'sticky',
				left: 0,
				top: 0
			}}
		>
			<div style={{ height: '2rem', textAlign: 'center', color: 'white', marginTop: '20px' }}>
				<h1>PH University</h1>
			</div>
			<Menu theme='dark' mode='inline' defaultSelectedKeys={['4']} items={sidebarItems} />
			<Button
				type='dashed'
				style={{
					position: 'absolute',
					bottom: '20px',
					left: '20px',
					width: '180px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '10px'
				}}
				onClick={() => dispatch(logOut())}
			>
				<AiOutlineLogout />
				<span>Logout</span>
			</Button>
		</Sider>
	);
};

export default Sidebar;
