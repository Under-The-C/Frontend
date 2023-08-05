import { atom, selector } from "recoil";
import { SalesDto } from "../interface/sales";

export const salesState = atom<SalesDto>({
  key: "salesState",
  default: {
    mainImage: "",
    productName: "",
    price: 0,
    keyword: [],
    detailImage: [],
    description: "",
    salePeriod: "",
  },
});

export const mainImageState = atom<string>({
  key: "mainImageState",
  default: "",
});

export const formDataState = atom<FormData | null>({
  key: "formDataState",
  default: null,
});
