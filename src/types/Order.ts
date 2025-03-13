import { type OrderItem } from "./OrderItem";
export interface Order {
  OrderItems: OrderItem[];
  buyer: string;
}
