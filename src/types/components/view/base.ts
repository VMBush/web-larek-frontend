import { IEvents } from '../../../components/base/events';

export interface IView {
	render(): HTMLElement;
}

export interface IViewConstructor<D> {
	new (emitter: IEvents, data: D): IView;
}

export interface IModalView<D> {
	new (container: HTMLElement, emitter: IEvents): IModalView<D>;
	emitter: IEvents;
	container: HTMLElement;
	open(modalData: D): void;
	close(): void;
}
