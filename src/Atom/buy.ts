import { atom, selector } from "recoil";
import { BuyItem } from "../interface/buy";
import { Buyer } from "../interface/user";
import { userState } from "./user";
import { BasketItem } from "../interface/buy";


export const buyState = atom<BuyItem>({
  key: "buyState",
  default: {
    id: 0,
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

export const basketState = atom<BasketItem[]>({
  key: "basketState",
  default: [],
});

