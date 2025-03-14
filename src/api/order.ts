import request from "@/utils/request";

request.defaults.baseURL += "/order-api";

export function getOrderList(params: any) {
  return request({
    url: "/order/list",
    method: "get",
    params,
  });
}

export function getOrderDetail(params: any) {
  return request({
    url: "/order/detail",
    method: "get",
    params,
  });
}

export function getOrderStatus(params: any) {
  return request({
    url: "/order/status",
    method: "get",
    params,
  });
}

export function updateOrderStatus(data: any) {
  return request({
    url: "/order/updateStatus",
    method: "post",
    data,
  });
}
