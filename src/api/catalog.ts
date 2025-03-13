import axios from "axios";
import type { CatalogBrand } from "@/types/CatalogBrand";
import type { CatalogType } from "@/types/CatalogType";

export async function getBrandListApi(): Promise<CatalogBrand[]> {
  const response = await axios.get<CatalogBrand[]>("/api/brands");
  return response.data;
}

export async function getTypeListApi(): Promise<CatalogType[]> {
  const response = await axios.get<CatalogType[]>("/api/types");
  return response.data;
}
