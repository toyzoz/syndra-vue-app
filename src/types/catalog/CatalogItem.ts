export interface CatalogItem {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureFileName: string;
  catalogTypeId: number;
  catalogBrandId: number;
  restockThreshold: number;
  maxStockThreshold: number;
}
