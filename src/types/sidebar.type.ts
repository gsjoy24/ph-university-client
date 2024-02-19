export type TRoute = {
	path: string;
	element: JSX.Element;
};

export type TUserPath = {
	name?: string;
	path: string;
	element: JSX.Element;
	children?: TUserPath[];
};

export type TSidebarItem =
	| {
			key: string;
			label: JSX.Element | string;
			children?: TSidebarItem[];
	  }
	| undefined;
