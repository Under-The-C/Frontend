import React, { useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userState } from "../../Atom/user";
import { useNavigate } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import axiosInstance from "../../API/axios";
export const MypageEdit = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleonClickEditProfile = async () => {
    if (user.address === "") {
      alert("주소를 입력해주세요");
      return;
    }
    if (user.detailAddress === "") {
      alert("상세 주소를 입력해주세요");
      return;
    }
    if (user.email === "") {
      alert("닉네임을 입력해주세요");
      return;
    }
    //수정 api요청 먼저 하기
    const response = await axiosInstance.post("/api/v1/user/update");
    
    //mypage effect때문에 수정해도 반영 안될듯
    navigate(-1);
  };

  const handelClickSecession = () => {

    window.location.href =
      "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=be84e5c954c05f4d77886292167f2621&redirect_uri=https://115.85.181.92/login/oauth2/kakao-unlink";
    
    navigate("/");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader: FileReader | null = new FileReader();
    if (!file) return;

    try {
      reader.onload = () => {
        if (reader.result) {
          setUser({
            ...user,
            profile: reader.result as string,
          });
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error image load:", error);
    }
  };

  const handleChangeImageClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleSearchAddr = {
    clickButton: () => {
      setOpenPostcode(!openPostcode);
    },

    selectAddress: (data: any) => {
      setUser({ ...user, address: data.address });
      setOpenPostcode(false);
    },
  };

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Container>
      <div className="flex w-full h-full justify-center items-center flex-col">
        <div className="mt-20 flex items-start w-[70vw]">
          <span className="font-black text-[3.5rem]">마이페이지</span>
        </div>
        <div className="flex justify-between flex-col w-[70vw] mt-2 p-10 bg-[#9EEBA5] rounded-3xl">
          <Button
              variant="primary"
              className="ml-10 h-10 rounded-md outline-none border-none bg-mint text-black w-32"
              onClick={handelClickSecession}
            >
              회원탈퇴
            </Button>
          <div className="flex w-full h-[18vh] justify-center items-center flex-col">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <img
              src={user.profile}
              alt="profile"
              className="h-[13vh] aspect-square rounded-full"
            />
            <Button
              variant="primary"
              className="h-10 rounded-md outline-none border-none bg-mint text-black w-32 mt-3"
              onClick={handleChangeImageClick}
            >
              사진 수정하기
            </Button>
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
              onChange={handleInput}
              type="text"
              className=" ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3"
            />
          </div>
          {user.role === "seller" && (
            <div className="flex flex-row w-full h-[15%] justify-center items-center my-10 ">
              <label className="flex text-xl font-semibold w-32">
                마켓 소개
              </label>
              <input
                name="marketInfo"
                value={user.marketInfo}
                onChange={handleInput}
                type="text"
                className=" ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3"
              />
            </div>
          )}
          <div
            className="flex flex-col w-full justify-center items-end"
            onClick={handleSearchAddr.clickButton}
          >
            <Button
              variant="primary"
              className=" h-10 rounded-md outline-none border-none  bg-mint text-black  w-32 mr-20"
            >
              주소 검색
            </Button>
            {openPostcode && (
              <DaumPostcode
                onComplete={handleSearchAddr.selectAddress}
                autoClose={false}
                defaultQuery="판교역로 235"
                className="flex w-[80%]"
              />
            )}
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
              onChange={handleInput}
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
              수정완료
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
