import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { useCurrentToken } from '../../redux/store';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
	const token = useAppSelector(useCurrentToken);
	if (!token) {
		return <Navigate to='/login' replace />;
	}
	return children;
};

export default ProtectedRoute;
