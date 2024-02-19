import { Navigate } from 'react-router-dom';
import { logOut, selectCurrentToken, selectCurrentUser } from '../../redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
type TProtectedRoute = {
	children: JSX.Element;
	role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
	const token = useAppSelector(selectCurrentToken);
	const user = useAppSelector(selectCurrentUser);

	const dispatch = useAppDispatch();
	if (!token) {
		dispatch(logOut());
		return <Navigate to='/login' replace />;
	}
	if (role !== undefined && user?.role !== role) {
		return <Navigate to='/login' replace />;
	}

	return children;
};

export default ProtectedRoute;
