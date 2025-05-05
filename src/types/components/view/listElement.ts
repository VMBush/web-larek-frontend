import { IView, IViewConstructor } from "./base";
import { ProductBasketData, ProductItemData } from "./types";


export type ListElement<T> = IView & T & IViewConstructor<T>;
export interface ProductListElement extends ListElement<ProductItemData> {}
export interface BasketListElement extends ListElement<ProductBasketData> {}
