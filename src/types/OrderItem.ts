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
