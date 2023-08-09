import { atom, selector } from "recoil";
import { BuyItem } from "../interface/buy";
import { Buyer } from "../interface/user";
import { userState } from "./user";
export const buyState = atom<BuyItem>({
  key: "buyState",
  default: {
    id: 0,
    mainImage: "0",
    productName: "0",
    price: 10000,
    keyword: [""],
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

export const buyerState = atom<Buyer>({
  key: "buyerState",
  default: {
    buyerId: 0,
    buyerName: "",
    buyerEmail: "",
    buyerAddress: "",
    buyerPhone: "",
  },
});

export const buyeruserState = selector({
  key: "buyeruserState",
  get: ({ get }) => {
    const user = get(userState);
    const buyerValue = get(buyerState);

    return {
      user,
      buyerValue,
    };
  },
  set: ({ set }, newValue: any) => {
    if (newValue.user) set(userState, newValue.user);
    if (newValue.buyerValue) set(buyerState, newValue.buyerValue);
  },
});
