import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productDto } from "../../interface/product";
import { Container } from "react-bootstrap";
import { SearchItemSummay } from "./SearchItemSummay";

const dummydata: productDto[] = [
  {
    id: 1,
    seller_id: 1,
    name: "테스트",
    subTitle: "테스트",
    price: 1000,
    description: "테스트",
    subDescription: "테스트",
    main_image: "https://i.imgur.com/1QZzX3j.png",
    detailImage: ["https://i.imgur.com/1QZzX3j.png"],
    keyword: ["test"],
    saleStartDate: "2021-09-01",
    saleEndDate: "2023-09-01",
    category: "채소",
    viewCount: 12,
    createdAt: "2021-09-01",
    rating: 4.5,
  },
  {
    id: 2,
    seller_id: 1,
    name: "테스트",
    subTitle: "테스트",
    price: 1000,
    description: "테스트",
    subDescription: "테스트",
    main_image: "https://i.imgur.com/1QZzX3j.png",
    detailImage: ["https://i.imgur.com/1QZzX3j.png"],
    keyword: ["test"],
    saleStartDate: "2021-09-01",
    saleEndDate: "2023-09-01",
    category: "채소",
    viewCount: 12,
    createdAt: "2021-09-01",
    rating: 4.5,
  },
  {
    id: 3,
    seller_id: 1,
    name: "테스트",
    subTitle: "테스트",
    price: 1000,
    description: "테스트",
    subDescription: "테스트",
    main_image: "https://i.imgur.com/1QZzX3j.png",
    detailImage: ["https://i.imgur.com/1QZzX3j.png"],
    keyword: ["test"],
    saleStartDate: "2021-09-01",
    saleEndDate: "2023-09-01",
    category: "채소",
    viewCount: 12,
    createdAt: "2021-09-01",
    rating: 4.5,
  },
  {
    id: 4,
    seller_id: 1,
    name: "테스트",
    subTitle: "테스트",
    price: 1000,
    description: "테스트",
    subDescription: "테스트",
    main_image: "https://i.imgur.com/1QZzX3j.png",
    detailImage: ["https://i.imgur.com/1QZzX3j.png"],
    keyword: ["test"],
    saleStartDate: "2021-09-01",
    saleEndDate: "2023-09-01",
    category: "채소",
    viewCount: 12,
    createdAt: "2021-09-01",
    rating: 4.5,
  },
];

export const Search = () => {
  const search = useParams().word;
  const [products, setProducts] = useState<productDto[]>(dummydata);
  const order = ["최신순", "조회순", "리뷰순", "저가순"];

  useEffect(() => {
    //fetch
  }, []);

  const handleOrder = (e: any) => {
    const id = e.target.id;
    console.log(id);

    // setProduct (fetch(`http://localhost:8080/product/search/${search}/${id}`
  };

  return (
    <Container className="mt-20">
      <div className="w-full h-[8vh]">
        <span className="font-bold text-[2rem]">{search}</span>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex ml-0 w-[17vw] h-[5vh] justify-between">
          {order.map((item) => (
            <span
              className="font-semibold text-[1rem]"
              onClick={handleOrder}
              id={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-4 w-full h-full">
        {products.map((item: productDto) => (
          <SearchItemSummay key={item.id} props={item} />
        ))}
      </div>
    </Container>
  );
};
