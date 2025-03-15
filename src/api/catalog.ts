import request from "@/utils/request";
import type { CatalogBrand } from "@/types/catalog/CatalogBrand";
import type { CatalogType } from "@/types/catalog/CatalogType";
import type { CatalogItem } from "@/types/catalog/CatalogItem";
import type { PaginatedItems } from "@/types/catalog/PaginatedItems";

request.defaults.baseURL += "/catalog-service";

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

export async function getCatalogListApi(
  brand: number | null,
  type: number | null,
  pageIndex: number = 0,
  pageSize: number = 10
): Promise<PaginatedItems<CatalogItem>> {
  return request({
    url:
      "/items?brandId=" +
      brand +
      "&typeId=" +
      type +
      "&pageIndex=" +
      pageIndex +
      "&pageSize=" +
      pageSize,
    method: "get",
  });
}

export async function getCatalogPicApi(
  id: number
): Promise<Blob | MediaSource> {
  return request({
    url: "/items/" + id + "/pic",
    method: "get",
  });
}
