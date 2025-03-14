import request from "@/utils/request";
import type { CatalogBrand } from "@/types/catalog/CatalogBrand";
import type { CatalogType } from "@/types/catalog/CatalogType";
import type { CatalogItem } from "@/types/catalog/CatalogItem";

request.defaults.baseURL += "/catalog-api";

export async function getBrandListApi(): Promise<CatalogBrand[]> {
  return request({
    url: "/brands",
    method: "get",
  });
}

export async function getTypeListApi(): Promise<CatalogType[]> {
  return request({
    url: "/types",
    method: "get",
  });
}

export async function getCatalogListApi(): Promise<CatalogItem[]> {
  return request({
    url: "/items",
    method: "get",
  });
}
