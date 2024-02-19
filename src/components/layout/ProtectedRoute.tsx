import { Navigate } from 'react-router-dom';
import { logOut, selectCurrentToken } from '../../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { TUser } from '../../types';
import { verifyToken } from '../../utils/verifyToken';

type TProtectedRoute = {
	children: JSX.Element;
	role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
	const dispatch = useAppDispatch();
	const token = useAppSelector(selectCurrentToken);
	let user: TUser | null = null;

	if (!token) {
		dispatch(logOut());
		return <Navigate to='/login' replace />;
	} else {
		user = verifyToken(token) as TUser;
	}
	if (role !== undefined && user?.role !== role) {
		return <Navigate to='/login' replace />;
	}

	return children;
};

export default ProtectedRoute;
