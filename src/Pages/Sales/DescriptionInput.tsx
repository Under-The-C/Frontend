import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { salesState } from "../../Atom/sales";

export const DescriptionInput = () => {
  const [sales, setSales] = useRecoilState(salesState);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const handleOnChangeTitle = (e: any) => {
    setTitle(e.target.value);
    //setSales({ ...sales, productName: e.target.value });
  };

  const inputChangeHandler = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "price":
        setPrice(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex w-full h-[30vh] py-10 flex-col">
      <div className="flex flex-grow w-full">
        <label className="flex flex-row w-full h-full items-center">
          <span className="font-bold text-xl">상품명</span>
          <input
            name="title"
            className="w-[40vw] h-[5vh] ml-5 p-2 bg-slate-100 outline-none border-none rounded-lg font-bold text-lg"
            type="text"
            value={title}
            onChange={inputChangeHandler}
          />
        </label>
      </div>
      <div className="flex flex-grow w-full h-32 mt-3">
        <label className="flex flex-col w-full h-full">
          <span className="font-bold text-xl w-full">상품 소개</span>
          <textarea
            name="description"
            placeholder="최대 500자까지 입력 가능합니다."
            onChange={inputChangeHandler}
            maxLength={100}
            className="w-[44vw] h-32 text-[1rem] font-semibold border-none outline-none rounded-lg bg-slate-100 p-3 mt-4"
            style={{ wordWrap: "break-word", resize: "none" }}
          />
        </label>
      </div>
      <div className="flex flex-grow w-full mt-3">
        <label className="flex flex-row w-full h-full items-center">
          <span className="font-bold text-xl">가격</span>
          <input
            name="price"
            className="w-[41vw] h-[5vh] ml-5 p-2 bg-slate-100 outline-none border-none rounded-lg font-bold text-lg"
            type="text"
            value={title}
            onChange={inputChangeHandler}
          />
        </label>
      </div>
    </div>
  );
};
