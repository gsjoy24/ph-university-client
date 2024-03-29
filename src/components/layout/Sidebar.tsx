import { Button, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { AiOutlineLogout } from 'react-icons/ai';
import { Navigate } from 'react-router-dom';
import { logOut, selectCurrentToken, selectCurrentUser } from '../../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import adminPaths from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';
import { TUser } from '../../types';
import sidebarItemsGenerator from '../../utils/sidebarItemsGenerator';
import { userRoles } from '../../utils/userRoles';
import { verifyToken } from '../../utils/verifyToken';

const Sidebar = () => {
	const dispatch = useAppDispatch();
	const token = useAppSelector(selectCurrentToken);
	let user: TUser | null = null;

	if (!token) {
		dispatch(logOut());
		return <Navigate to='/login' replace />;
	} else {
		user = verifyToken(token) as TUser;
	}
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
				danger
				className='absolute bottom-5 left-5 w-[180px] flex justify-center items-center gap-3 font-bold'
				onClick={() => dispatch(logOut())}
			>
				<AiOutlineLogout />
				<span>Logout</span>
			</Button>
		</Sider>
	);
};

export default Sidebar;
