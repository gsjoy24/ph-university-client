import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentToken } from '../../redux/features/auth/authSlice';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
	const token = useAppSelector(selectCurrentToken);
	if (!token) {
		return <Navigate to='/login' replace />;
	}
	return children;
};

export default ProtectedRoute;
