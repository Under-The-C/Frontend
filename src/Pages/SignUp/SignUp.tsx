import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import { useRecoilState } from "recoil";
import { signupState } from "../../Atom/signup";

export const SignUp = () => {
  const param = useParams();
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");

  const [signup, setSignup] = useRecoilState(signupState);

  useEffect(() => {
    setSignup({ ...signup, role: "" });
  }, []);

  const handleSearchAddr = {
    clickButton: () => {
      setOpenPostcode(!openPostcode);
    },

    selectAddress: (data: any) => {
      console.log(`
          주소: ${data.address},
          우편번호: ${data.zonecode}
      `);
      setAddress(data.address);
      setOpenPostcode(false);
    },
  };

  if (param.role === "seller") {
    return (
      <Container>
        <div className="flex w-full h-full justify-center items-center flex-col">
          <div className="mt-20 flex items-start w-[70vw]">
            <span className="font-black text-[3.5rem]">회원가입</span>
          </div>
          <div className="flex justify-between flex-col w-[70vw] mt-2 p-10 bg-[#9EEBA5] rounded-3xl">
            <div className="flex flex-row w-full h-[15%] justify-center items-center my-10">
              <label className="flex text-xl font-semibold w-20">성함</label>
              <input
                type="text"
                className=" ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3"
              />
            </div>
            <div className="flex flex-row w-full h-[15%] justify-center items-center my-10">
              <label className="flex text-xl font-semibold w-20">연락처</label>
              <input
                type="tel"
                className=" ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3"
              />
            </div>
            <div className="flex flex-row w-full h-[15%] justify-center items-center my-10">
              <label className="flex text-xl font-semibold w-20">닉네임</label>
              <input
                type="text"
                className=" ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3"
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
              {address !== "" ? (
                <div className="flex flex-row w-full justify-center items-center my-10">
                  <label className="flex text-xl font-semibold w-20 px-3">
                    주소
                  </label>
                  <input
                    type="text"
                    value={address}
                    className=" ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3 bg-blue-100"
                    disabled={true}
                  ></input>
                </div>
              ) : null}
              <div className="flex flex-row w-full justify-center items-center my-10">
                <label className="flex text-xl font-semibold w-20">
                  상세 주소
                </label>
                <input
                  type="text"
                  className=" ml-10 flex w-[80%] h-10 rounded-md outline-none border-none px-3"
                />
              </div>
            </div>
            <div className="flex w-full justify-center">
              <Button
                variant="primary"
                className=" h-10 rounded-md outline-none border-none bg-mint text-black w-32 mr-20"
              >
                회원가입
              </Button>
            </div>
          </div>
        </div>
      </Container>
    );
  } else if (param.role === "customer") {
    return <div>customer</div>;
  } else {
    return <div>error</div>;
  }
};
