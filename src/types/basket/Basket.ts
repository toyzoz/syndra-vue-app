export interface BasketItem {
  id: number;
  productId: number;
  productName: string;
  pictureUrl: string;
  unitPrice: number;
  quantity: number;
  oldUnitPrice: number;
}

export interface CustomerBasket {
  buyer: string;
  items: BasketItem[];
}
