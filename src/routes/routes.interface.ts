export type TRoute = { path: string; element: JSX.Element };
export type TNavItem = {
	key: string;
	label: JSX.Element | string;
	children?: {
		key: string;
		label: JSX.Element;
	}[];
};
