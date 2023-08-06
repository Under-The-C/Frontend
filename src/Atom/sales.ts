import { atom, selector } from "recoil";
import { SalesDto } from "../interface/sales";

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
