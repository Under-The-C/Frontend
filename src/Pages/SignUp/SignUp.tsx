import React, { useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import { useRecoilState } from "recoil";
import { signupState } from "../../Atom/signup";

export const SignUp = () => {
  const param = useParams();
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const [signup, setSignup] = useRecoilState(signupState);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!param.role) return;
    setSignup({ ...signup, role: param.role });
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader: FileReader | null = new FileReader();
    if (!file) return;

    try {
      reader.onload = () => {
        if (reader.result) {
          setSignup({
            ...signup,
            image: reader.result as string,
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
      console.log(`
          주소: ${data.address},
          우편번호: ${data.zonecode}
      `);
      setSignup({ ...signup, address: data.address });
      setOpenPostcode(false);
    },
  };

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  return (
    <Container>
      <div className="flex w-full h-full justify-center items-center flex-col">
        <div className="mt-20 flex items-start w-[70vw]">
          <span className="font-black text-[3.5rem]">회원가입</span>
        </div>
        <div className="flex justify-between flex-col w-[70vw] mt-2 p-10 bg-[#9EEBA5] rounded-3xl">
          <div className="flex flex-row w-full h-[15%] justify-center items-center my-10">
            <label className="flex text-xl font-semibold w-32">성함</label>
            <input
              type="text"
              className=" ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3"
              disabled={true}
            />
          </div>
          <div className="flex flex-row w-full h-[15%] justify-center items-center my-10">
            <label className="flex text-xl font-semibold w-32">연락처</label>
            <input
              type="tel"
              className=" ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3"
              disabled={true}
            />
          </div>
          <div className="flex flex-row w-full h-[15%] justify-center items-center my-10 ">
            <label className="flex text-xl font-semibold w-32">닉네임</label>
            <input
              name="nickname"
              type="text"
              className=" ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3"
              onAbort={handleInput}
            />
          </div>
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
          <div className="flex flex-col w-full">
            {signup.address !== "" ? (
              <div className="flex flex-row w-full justify-center items-center my-10">
                <label className="flex text-xl font-semibold w-32 px-3">
                  주소
                </label>
                <input
                  type="text"
                  value={signup.address}
                  className=" ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3 "
                  disabled={true}
                ></input>
              </div>
            ) : null}
            <div className="flex flex-row w-full justify-center items-center my-10">
              <label className="flex text-xl font-semibold w-32">
                상세 주소
              </label>
              <input
                name="detailAddress"
                type="text"
                className="ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3"
                onChange={handleInput}
              />
            </div>
          </div>
          {param.role === "seller" ? (
            <div className="flex flex-row w-full h-[15%] justify-center items-center my-10">
              <label className="flex text-xl font-semibold w-320">
                사업자 등록증
              </label>
              <div className=" ml-10 flex w-[80%] rounded-md outline-none border-none">
                <div className="flex h-[20vh] aspect-square justify-center items-center  bg-gray-200">
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                  {signup.image ? (
                    <img
                      src={signup.image}
                      className="w-full h-full image-contain"
                      alt="mainImage"
                      onClick={handleChangeImageClick}
                    />
                  ) : (
                    <img
                      src={require("../../public/images/camera.png")}
                      className="w-16 h-16"
                      alt="camera"
                      onClick={handleChangeImageClick}
                    />
                  )}
                </div>
              </div>
            </div>
          ) : null}
          <div className="flex w-full justify-center">
            <Button
              variant="primary"
              className=" h-10 rounded-md outline-none border-none bg-mint text-black w-32"
            >
              회원가입
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
