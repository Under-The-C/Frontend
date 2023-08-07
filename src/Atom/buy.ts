import { atom, selector } from "recoil";
import { SalesDto } from "../interface/sales";

export const buyState = atom<SalesDto>({
  key: "salesState",
  default: {
    mainImage: "path",
    productName: "복숭아",
    price: 10000,
    keyword: ['키워드'],
    saleStartDate: "2023-08-15",
    saleEndDate: "2023-09-15",
    detailImage: ['1','2','3'],
    description: "aaaaaa",
    subDescription: "bbbbb",
    subTitle: "vvvvv",
  },
});

export const formDataState = atom<FormData | null>({
  key: "formDataState",
  default: null,
});
