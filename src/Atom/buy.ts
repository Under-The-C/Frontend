import { atom, selector } from "recoil";
import { BuyItem } from "../interface/buy";

export const buyState = atom<BuyItem>({
  key: "buyState",
  default: {
    id: 0,
    mainImage: "0",
    productName: "0",
    price: 10000,
    keyword: [''],
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
