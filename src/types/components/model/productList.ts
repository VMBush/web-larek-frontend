import { IEvents } from '../../../components/base/events';
import { IApiModel } from '../../api';

type ProductData = {
	id: string;
	description: string;
	image: string;
	title: string;
	category: string;
	price: number;
};

export interface IProductListModel {
	items: ProductData[];
	api: IApiModel;
	emitter: IEvents;

	new (api: IApiModel, emitter: IEvents): IProductListModel;
	load(): void;
	get(id: string): ProductData | undefined;
	getAll(): ProductData[];
}
