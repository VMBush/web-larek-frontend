export type ProductItemData = {
	id: string;
	image: string;
	title: string;
	category: string;
	price: number;
};

export type ProductListData = {
	items: ProductItemData[];
};

export type ProductModalData = {
	id: string;
	description: string;
	image: string;
	title: string;
	category: string;
	price: number;
};

export type SuccessOrderData = {
	price: number;
};

export type ProductBasketData = {
	id: string;
	title: string;
	price: number;
};

export type basketData = {
	totalPrice: number;
	items: ProductBasketData[];
};
