import React, { useEffect } from "react";
import { ImageUpload } from "./ImageUpload";
import { Button, Container } from "react-bootstrap";
import { DescriptionInput } from "./DescriptionInput";
import { DatePick } from "./DatePick";
import { ImagesPick } from "./ImagesPick";
import { KeywordInput } from "./KeywordInput";
import { DescriptionSubtitleInput } from "./DescriptionSubtitleInput";
import { useRecoilState, useRecoilValue } from "recoil";
import { salesState } from "../../Atom/sales";
import { userState } from "../../Atom/user";
import { formatDate } from "../../Utils/date";

export const Sales = () => {
  const [sales, setSales] = useRecoilState(salesState);
  const user = useRecoilValue(userState);

  useEffect(() => {
    setSales({
      ...sales,
      seller_id: user.id,
      createdAt: formatDate(new Date()),
    });
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");

    if (!sales.main_image) {
      alert("메인이미지를 등록해주세요.");
      return;
    }
    if (!sales.name) {
      alert("상품명을 등록해주세요.");
      return;
    }
    if (!sales.price) {
      alert("상품 가격을 입력해주세요.");
      return;
    }
    if (!sales.keyword) {
      alert("키워드를 입력해주세요.");
      return;
    }
    if (!sales.detailImage) {
      alert("상세 이미지를 등록해주세요.");
      return;
    }
    if (!sales.description) {
      alert("상품 설명을 입력해주세요.");
      return;
    }
    if (!sales.subDescription) {
      alert("상품 설명을 입력해주세요.");
      return;
    }
    if (!sales.subTitle) {
      alert("소제목을 입력해주세요.");
      return;
    }
    if (!sales.saleStartDate) {
      alert("판매 시작 날짜를 입력해주세요.");
      return;
    }
    if (!sales.saleEndDate) {
      alert("판매 종료 날짜를 입력해주세요.");
      return;
    }
    console.log(sales);
    //submit api call
  };

  return (
    <Container>
      <form
        className="flex h-full w-full flex-col py-20 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full h-full mb-10">
          <span className="font-black text-3xl">판매등록</span>
        </div>
        <div className="grid grid-row-6 grid-cols-3 gap-3 w-full h-full">
          <div className="col-span-1 w-full h-full bg-white">
            <ImageUpload />
          </div>
          <div className="col-span-3 row-span-2 w-full h-full bg-white">
            <DescriptionInput />
          </div>
          <div className="col-span-3 w-full h-full bg-white">
            <DatePick />
          </div>
          <div className="col-span-3 w-full h-full bg-white">
            <ImagesPick />
          </div>
          <div className="col-span-3 w-full h-full bg-white">
            <KeywordInput />
          </div>
          <div className="col-span-3 w-full h-full bg-white">
            <DescriptionSubtitleInput />
          </div>
        </div>
        <Button type="submit" className="bg-mainGreen w-36 mt-16">
          <span>등록하기</span>
        </Button>
      </form>
    </Container>
  );
};
