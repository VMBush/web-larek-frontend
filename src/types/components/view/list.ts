import { IEvents } from '../../../components/base/events';
import { IView, IViewConstructor } from './base';
import { ProductBasketData, ProductItemData } from './types';

export interface IListView<D> extends IView {
	new (container: HTMLElement, emitter: IEvents, items?: D[]): IListView<D>;
	_items: IView[];
	container: HTMLElement;
	emitter: IEvents;
	productConstructor: IViewConstructor<D>;
	set(items: D[]): void;
}

export interface IProductListView extends IListView<ProductItemData> {}
export interface IBasketListView extends IListView<ProductBasketData> {
	add(item: ProductBasketData): void;
	remove(item: string): void;
}
