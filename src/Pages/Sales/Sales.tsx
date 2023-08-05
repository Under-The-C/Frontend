import React from "react";
import { ImageUpload } from "./ImageUpload";
import { Button, Container } from "react-bootstrap";
import { DescriptionInput } from "./DescriptionInput";
import { DatePick } from "./DatePick";
import { ImagesPick } from "./ImagesPick";

export const Sales = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    //submit api
  };
  return (
    <Container>
      <form
        className="flex h-full w-full flex-col py-20"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full h-full mb-10">
          <span className="font-black text-3xl">판매등록</span>
        </div>
        <div className="grid grid-row-6 grid-cols-3 gap-3 w-full h-full">
          <div className="col-span-1 w-full h-full bg-white">
            <ImageUpload />
          </div>
          <div className="col-span-3 w-full h-full bg-white">
            <DescriptionInput />
          </div>
          <div className="col-span-3 w-full h-full bg-white">
            <DatePick />
          </div>
          <div className="col-span-3 w-full h-full bg-white">
            <ImagesPick />
          </div>
          <div className="col-span-3 w-full h-full bg-white">4</div>
          <div className="col-span-3 w-full h-full bg-white">6</div>
        </div>
        <Button className="bg-mainGreen w-36">
          <span>등록하기</span>
        </Button>
      </form>
    </Container>
  );
};
