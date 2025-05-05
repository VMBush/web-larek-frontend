import { IEvents } from "../../../components/base/events";


export interface IBasketModel {
  new (emitter: IEvents): IBasketModel;
	items: string[];
	emitter: IEvents;
	add(item: string): void;
	remove(item: string): void;
}