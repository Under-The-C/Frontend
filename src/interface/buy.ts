export interface BuyItem {
  id: number;
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
export interface BasketItem {
  id: number;
  seller_id: number;
  main_image: string;
  name: string;
  price: number;
  category: string;
  count: number;
}