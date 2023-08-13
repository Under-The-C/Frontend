import { atom, selector } from "recoil";
import { SalesDto, salesItemSummaryDto } from "../interface/sales";
import { SellerMarketDto } from "../interface/user";

export const salesState = atom<SalesDto>({
  key: "salesState",
  default: {
    seller_id: 0,
    main_image: "",
    name: "",
    price: 0,
    keyword: [],
    saleStartDate: "",
    saleEndDate: "",
    detailImage: [],
    description: "",
    subDescription: "",
    subTitle: "",
    category: "과일",
    createdAt: "",
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
