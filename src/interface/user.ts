export interface UserDto {
  id: number;
  name: string;
  phone: string;
  email: string;
  role: string;
  address: string;
  detailAddress: string;
  profile?: string;
}

export interface SellerMarketDto {
  sellerId: number;
  sellerName: string;
  sellerProfileImage: string;
  sellerRating: number;
  sellerReviewCount: number;
  marketInfo: string;
}

export interface Buyer {
  buyerId: number;
  buyerName: string;
  buyerEmail: string;
  buyerAddress: string;
  buyerPhone: string;
}
