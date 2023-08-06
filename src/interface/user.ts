export interface UserDto {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface SellerMarketDto {
  sellerId: number;
  sellerName: string;
  sellerProfileImage: string;
  sellerRating: number;
  sellerReviewCount: number;
  marketInfo: string;
}
