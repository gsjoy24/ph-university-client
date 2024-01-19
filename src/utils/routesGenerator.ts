import { TRoute } from '../routes/routes.interface';

type TUserPath = {
	name: string;
	path?: string;
	element?: JSX.Element;
	children?: TUserPath[];
};

const routesGenerator = (items: TUserPath[]) => {
	const routes = items.reduce((acc: TRoute[], item) => {
		if (item.path && item.element) {
			acc.push({
				path: item.path,
				element: item.element
			});
		}
		if (item.children) {
			item.children.forEach((child) => {
				if (child.path && child.element) {
					acc.push({
						path: child.path,
						element: child.element
					});
				}
			});
		}
		return acc;
	}, []);
	return routes;
};

export default routesGenerator;
