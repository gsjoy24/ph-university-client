import { BaseQueryApi } from '@reduxjs/toolkit/query';

export type TQueryParams = {
	name: string;
	value: string;
};

export type TError = {
	status: number;
	data: {
		message: string;
		success: boolean;
		stack?: string;
	};
};
export type TMeta = {
	limit: number;
	page: number;
	total: number;
	totalPage: number;
};

export type TResponse<T> = {
	data?: T;
	error?: TError;
	meta?: TMeta;
	success: boolean;
	message?: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
