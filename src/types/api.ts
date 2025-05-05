import { Api } from "../components/base/api";
import { ProductListData } from "./components/view/types";

type productDataApi = {
	id: string;
	description: string;
	image: string;
	title: string;
	category: string;
	price: number;
};

type ProductListDataApi = {
  total: number;
  items: productDataApi[];
}

type ErrorApi = {
  error: string;
}

type OrderDataApi = {
	payment: string;
	email: string;
	phone: string;
	address: string;
	total: number;
	items: string[];
};

type OrderConfirmDataApi = {
  id: string;
  total: number;
}

export interface IApiModel {
  api: Api;
  getProductList(): ProductListDataApi | ErrorApi;
  getProduct(id: string): productDataApi | ErrorApi;
  postOrder(data: OrderDataApi): OrderConfirmDataApi | ErrorApi;
}