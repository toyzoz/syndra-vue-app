import request from "@/utils/request.ts";

request.defaults.baseURL += "/basket-service";

export function getBasketListApi() {
  return request({
    url: "/basket",
    method: "get",
  });
}

export function addBasket(data) {
  return request({
    url: "/basket",
    method: "post",
    data,
  });
}

export function deleteBasket(id) {
  return request({
    url: `/basket/${id}`,
    method: "delete",
  });
}

export function updateBasket(data) {
  return request({
    url: `/basket/${data.id}`,
    method: "put",
    data,
  });
}
