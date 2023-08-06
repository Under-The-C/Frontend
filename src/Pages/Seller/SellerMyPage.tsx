import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { sellerState } from "../../Atom/user";
import { SellerMarketDto } from "../../interface/user";
import { salesItemSummaryDto } from "../../interface/sales";
import { Container } from "react-bootstrap";

const dummySeller: SellerMarketDto = {
  sellerId: 1,
  sellerName: "김철수",
  sellerProfileImage: "https://i.imgur.com/1QZzX3j.png",
  sellerRating: 4.5,
  sellerReviewCount: 103,
  marketInfo: "김철수의 농장입니다.",
};

const dummySummaryItems: salesItemSummaryDto[] = [
  {
    id: 1,
    mainImage: "https://i.imgur.com/1QZzX3j.png",
    productName: "유기농 백도 1.8kg",
    price: 10000,
    rating: 4.2,
    reviewCount: 103,
    salesDate: "7",
  },
  {
    id: 2,
    mainImage: "https://i.imgur.com/1QZzX3j.png",
    productName: "유기농 백도 1.82kg",
    price: 10000,
    rating: 4.2,
    reviewCount: 103,
    salesDate: "7",
  },
  {
    id: 3,
    mainImage: "https://i.imgur.com/1QZzX3j.png",
    productName: "유기농 백도 1.348kg",
    price: 10000,
    rating: 4.2,
    reviewCount: 103,
    salesDate: "7",
  },
  {
    id: 4,
    mainImage: "https://i.imgur.com/1QZzX3j.png",
    productName: "유기농 백도 31.8kg",
    price: 10000,
    rating: 4.2,
    reviewCount: 103,
    salesDate: "7",
  },
  {
    id: 5,
    mainImage: "https://i.imgur.com/1QZzX3j.png",
    productName: "유기농 백도 111.8kg",
    price: 10000,
    rating: 4.2,
    reviewCount: 103,
    salesDate: "7",
  },
];

export const SellerMyPage = () => {
  const [seller, setSeller] = useRecoilState(sellerState);

  useEffect(() => {
    setSeller({
      ...seller,
      market: dummySeller,
      salesItemsSummaryList: dummySummaryItems,
    });
  }, []);

  return (
    <Container>
      <div className="flex flex-col items-center w-full h-full bg-slate-300" />
    </Container>
  );
};
