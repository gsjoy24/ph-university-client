export type TError = {
	status: number;
	data: {
		message: string;
		success: boolean;
		stack?: string;
	};
};

export type TResponse = {
	data: any;
	error: TError;
};
