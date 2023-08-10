import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userState } from "../../Atom/user";
import { useNavigate } from "react-router-dom";

const dummyUser = {
  id: 1,
  name: "김민수",
  email: "abc@gmail.com",
  profile: "https://picsum.photos/200",
  address: "서울시 강남구",
  detailAddress: "역삼동",
  phone: "010-1234-5678",
  role: "customer",
};

export const MyPage = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(dummyUser);
  }, []);

  const handleonClickEditProfile = () => {
    navigate("/mypage-edit");
  };

  return (
    <Container>
      <div className="flex w-full h-full justify-center items-center flex-col">
        <div className="mt-20 flex items-start w-[70vw]">
          <span className="font-black text-[3.5rem]">마이페이지</span>
        </div>
        <div className="flex justify-between flex-col w-[70vw] mt-2 p-10 bg-[#9EEBA5] rounded-3xl">
          <div className="flex w-full h-[15vh] justify-center items-center">
            <img
              src={user.profile}
              alt="profile"
              className="h-[13vh] aspect-square rounded-full"
            />
          </div>
          <div className="flex flex-row w-full h-[15%] justify-center items-center my-10">
            <label className="flex text-xl font-semibold w-32">성함</label>
            <input
              type="text"
              value={user.name}
              className=" ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3"
              disabled={true}
            />
          </div>
          <div className="flex flex-row w-full h-[15%] justify-center items-center my-10">
            <label className="flex text-xl font-semibold w-32">연락처</label>
            <input
              type="tel"
              value={user.phone}
              className=" ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3"
              disabled={true}
            />
          </div>
          <div className="flex flex-row w-full h-[15%] justify-center items-center my-10 ">
            <label className="flex text-xl font-semibold w-32">닉네임</label>
            <input
              name="nickname"
              value={user.email}
              type="text"
              className=" ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3"
            />
          </div>
          <div className="flex flex-row w-full justify-center items-center my-10">
            <label className="flex text-xl font-semibold w-32 px-3">주소</label>
            <input
              type="text"
              value={user.address}
              className=" ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3 "
            ></input>
          </div>
          <div className="flex flex-row w-full justify-center items-center my-10">
            <label className="flex text-xl font-semibold w-32">상세 주소</label>
            <input
              name="detailAddress"
              type="text"
              className="ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3"
              value={user.detailAddress}
            />
          </div>
          <div className="flex w-full justify-center">
            <Button
              variant="primary"
              className="h-10 rounded-md outline-none border-none bg-mint text-black w-32"
              onClick={handleonClickEditProfile}
            >
              수정하기
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
