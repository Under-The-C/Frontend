import { BuyItem } from "../../interface/buy";
import { atom, selector } from "recoil";
import vegetable from "../../img/vagetable.jpg";
export const buyState1 = atom<BuyItem>({
    key: "buyState1",
    default: {
      id: 0,
      mainImage: vegetable,
      productName: "복숭아",
      price: 10000,
      keyword: ['1','2','3'],
      saleStartDate: "2023-08-15",
      saleEndDate: "2023-09-15",
      detailImage: [vegetable,vegetable,vegetable],
      description: "설명1",
      subDescription: "설명2",
      subTitle: "소제목",
    },
  });