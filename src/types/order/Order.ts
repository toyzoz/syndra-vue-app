export interface Order {
  OrderItems: OrderItem[];
  buyer: string;
  buyerId: string;
  address: Address;
  orderDate: Date;
  orderStatus: OrderStatus;
  description: string;
}

export interface OrderItem {
  id: number;
  orderId: number;
  productId: number;
  productName: string;
  unitPrice: number;
  discount: number;
  units: number;
  pictureUrl: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
  Cancelled,
}
