import axios from "axios";
import type { CatalogBrand } from "@/types/catalog/CatalogBrand";
import type { CatalogType } from "@/types/catalog/CatalogType";
import type { CatalogItem } from "@/types/catalog/CatalogItem";

export async function getBrandListApi(): Promise<CatalogBrand[]> {
  const response = await axios.get<CatalogBrand[]>("/brands");
  return response.data;
}

export async function getTypeListApi(): Promise<CatalogType[]> {
  const response = await axios.get<CatalogType[]>("/types");
  return response.data;
}

export async function getCatalogListApi(): Promise<CatalogItem[]> {
  const response = await axios.get<CatalogItem[]>("/items");
  return response.data;
}
