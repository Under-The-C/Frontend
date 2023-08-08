import { atom, selector } from "recoil";
import { SalesDto } from "../interface/sales";

export const buyState = atom<SalesDto>({
  key: "buyState",
  default: {
    mainImage: "path",
    productName: "복숭아",
    price: 10000,
    keyword: ['키워드'],
    saleStartDate: "2023-08-15",
    saleEndDate: "2023-09-15",
    detailImage: ['1','2','3'],
    description: "aaaaaa",
    subDescription: "Selector는 비동기 데이터를 Recoil의 데이터 플로우 그래프로 포함하는 방법 중 하나로 사용될 수 있습니다. 함수를 대표한다는 것을 숙지하고 있어야합니다: 주어진 인풋들로 항상 같은 결과를 만들어냅니다.(적어도 애플리케이션의 생명주기동안은 말이죠). 이것은 selector 평가가 캐시되거나, 재시작되거나, 혹은 수차례에 걸쳐서 실행될 수 있으므로 중요합니다. selector가 보통 읽기 전용 DB 쿼리를 모델링하는데에 좋은 방법이라고 하는 이유도 이 때문입니다. 변경 가능한 데이터의 경우, Query Refresh를 사용하거나 변경가능한 상태를 동기화하거나 상태를 유지하거나 혹은 다른 부수효과에 대해서 실험적인 Atom Effects API를 생각해볼수도 있습니다.",
    subTitle: "소제목",
  },
});

export const formDataState = atom<FormData | null>({
  key: "formDataState",
  default: null,
});
