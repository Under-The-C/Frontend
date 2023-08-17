interface ProductKeyword {
  id: number;
  product: string;
  productKeyword: {
    id: number;
    products: string[];
    keyword: string;
  };
  keyword: string;
}

interface DetailImage {
  id: number;
  imageUrl: string;
}

export interface BuyItem {
  id: number;
  productKeywords: ProductKeyword[];
  sellerId: number;
  name: string;
  subTitle: string;
  price: number;
  description: string;
  subDescription: string;
  mainImage: string;
  detailImage: DetailImage[];
  keywords: ProductKeyword[];
  saleStartDate: string;
  saleEndDate: string;
  category: string;
  viewCount: number;
  reviewCount: number;
  averageReviewPoint: number;
  createdAt: string;
}

export interface BasketItem {
  id: number;
  count: number;
}