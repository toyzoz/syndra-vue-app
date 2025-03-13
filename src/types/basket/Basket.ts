export interface BasketItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export interface CustomerBasket {
  buyer: string;
  items: BasketItem[];
}
