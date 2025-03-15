import type { Order } from "@/types/order/Order";
import request from "@/utils/request";

request.defaults.baseURL += "/ordering-service";

export async function getOrderListApi(): Promise<Order[]> {
  return request({
    url: "/orders",
    method: "get",
  });
}

export function getOrderDetailApi(params: any) {
  return request({
    url: "/order/detail",
    method: "get",
    params,
  });
}
