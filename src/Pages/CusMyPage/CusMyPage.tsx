import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userState } from "../../Atom/user";
import { useNavigate, Link } from "react-router-dom";

const CustomInfo = {
  id: 7,
  name: "손흥민",
  email: "son@gmail.com",
  profile: "https://picsum.photos/200/300​",
  address: "영국",
  detailAddress: "런던",
  phone: "010-2929-5959",
  role: "buyer",
};


export const CusMyPage = () =>{
  
  return(
    <div>
      <p>구매자님 반갑습니다. </p>   
    
    <button></button>
    <h1>리뷰를 남긴 상품</h1>
    <Link to="#">
      더보기
    </Link>
    </div>
  );
};