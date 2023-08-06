import { atom, selector } from "recoil";
import { SalesDto, salesItemSummaryDto } from "../interface/sales";
import { SellerMarketDto } from "../interface/user";

export const salesState = atom<SalesDto>({
  key: "salesState",
  default: {
    mainImage: "",
    productName: "",
    price: 0,
    keyword: [],
    saleStartDate: "",
    saleEndDate: "",
    detailImage: [],
    description: "",
    subDescription: "",
    subTitle: "",
  },
});

export const formDataState = atom<FormData | null>({
  key: "formDataState",
  default: null,
});

export const salesItemSummaryListState = atom<salesItemSummaryDto[]>({
  key: "salesItemSummaryListState",
  default: [],
});

export const sellerMarketState = atom<SellerMarketDto>({
  key: "sellerMarketState",
  default: {
    sellerId: 0,
    sellerName: "",
    sellerProfileImage: "",
    sellerRating: 0,
    sellerReviewCount: 0,
    marketInfo: "",
  },
});
