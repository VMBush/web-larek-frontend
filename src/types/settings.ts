
export interface Settings {
	gallerySelector: string;
	successModal: {
		templateId: string;
		description: string;
	};
	cardItem: {
		templateId: string;
		category: string;
		title: string;
		image: string;
		price: string;
	};
	cardModal: {
		templateId: string;
		image: string;
		category: string;
		title: string;
		description: string;
		toBasketButton: string;
		price: string;
	};
	cardBasket: {
		templateId: string;
		index: string;
		title: string;
		price: string;
		deleteButton: string;
	};
	basketModal: {
		templateId: string;
		itemsList: string;
		submitButton: string;
		price: string;
	};
	orderModal: {
		templateId: string;
		formName: string;
		payTypeButtons: string;
		addressInputName: string;
		submitButton: string;
	};
	contactsModal: {
		templateId: string;
		formName: string;
		emailInputName: string;
		phoneInputName: string;
		submitButton: string;
	};
}

export const SETTINGS: Settings = {
	gallerySelector: '.gallery',
	successModal: {
		templateId: '#success',
		description: '.order-success__description',
	},
	cardItem: {
		templateId: '#card-catalog',
		category: '.card__category',
		title: '.card__title',
		image: '.card__image',
		price: '.card__price',
	},
	cardModal: {
		templateId: '#card-preview',
		image: '.card__image',
		category: '.card__category',
		title: '.card__title',
		description: '.card__text',
		toBasketButton: '.card__button',
		price: '.card__price',
	},
	cardBasket: {
		templateId: '#card-basket',
		index: '.basket__item-index',
		title: '.card__title',
		price: '.card__price',
		deleteButton: '.basket__item-delete',
	},
	basketModal: {
		templateId: '#basket',
		itemsList: '.basket__list',
		submitButton: '.basket__button',
		price: '.basket__price',
	},
	orderModal: {
		templateId: '#order',
		payTypeButtons: 'h2.modal__title',
		formName: 'order',
		addressInputName: 'address',
		submitButton: '.order__button',
	},
	contactsModal: {
		templateId: '#contacts',
		formName: 'contacts',
		emailInputName: 'email',
		phoneInputName: 'phone',
		submitButton: '.button',
	},
};



