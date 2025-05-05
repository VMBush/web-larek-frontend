import { IApiModel } from '../../api';

export type OrderModelData = {
	payment: string;
	email: string;
	phone: string;
	address: string;
	total: number;
	items: string[];
};

export type IOrderInfoModel = OrderModelData & {
	api: IApiModel;
	new (api: IApiModel): IOrderInfoModel;
	confirm(): number;
};
