export interface SalesDto {
  seller_id: number;
  main_image: string;
  name: string;
  price: number;
  keyword: string[];
  detailImage: string[];
  description: string;
  subDescription: string;
  subTitle: string;
  saleStartDate: string;
  saleEndDate: string;
  createdAt: string;
  category: string;
}

export interface salesItemSummaryDto {
  id: number;
  mainImage: string;
  productName: string;
  price: number;
  rating: number;
  reviewCount: number;
  salesDate: string;
}
