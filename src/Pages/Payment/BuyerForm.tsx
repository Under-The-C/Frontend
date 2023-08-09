import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { Container, Row, Col } from "react-bootstrap";
import { buyerState } from "../../Atom/buy";
import { Buyer } from "../../interface/user";
import { buyeruserState } from "../../Atom/buy";

const buyerPerson: Buyer = {
  buyerId: 1,
  buyerName: "김철수",
  buyerEmail: "kim@chul.seo",
  buyerAddress: "경기도 부천시 가톨릭길-41 다솔동 1001호",
  buyerPhone: "01044444444",
};

const Text = styled.span`
    width:5vw;
`;


const FormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: left;
  width:80%;
  font-size: 1rem;
  margin-left:20vw;
`;

const StyledCol = styled(Col)`
  display: flex;
  flex-direction: row;
  font-weight:bold;
  align-items: center;
  gap: 3vw;
  margin-bottom: 2vw;
`;



export const BuyerForm = () => {
  const [buyerUser, setBuyerUser] = useRecoilState(buyeruserState);
  const [buyer, setBuyer] = useRecoilState(buyerState);
  useEffect(() => {
    setBuyerUser({
      ...buyerUser,
      buyerValue: buyerPerson,
    });
  }, []);

  const inputChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "buyerName") setBuyer({ ...buyer, buyerName: value });
    else if (name === "buyerPhone") setBuyer({ ...buyer, buyerPhone: value });
    else if (name === "buyerAddress") setBuyer({ ...buyer, buyerAddress: value });
  };

  const formPhoneNumber = (phone: string | undefined) => {
    if (phone) {
      return phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    } else {
      return "";
    }
  };

  return (
    <>
    <FormContainer>
      <StyledCol>
        <span>구매자 정보</span>
      </StyledCol>
      <StyledCol>
        <Text>이름</Text>        
        <input
          name="buyerName"
          value={buyerUser.buyerValue?.buyerName}
          type="text"
          placeholder={buyerUser.buyerValue?.buyerName}
          onChange={inputChange}
          maxLength={30}
          className="w-[55vw] h-[3rem] pl-2 border-none outline-none rounded-lg bg-slate-100"
        />     
      </StyledCol>
      <StyledCol>
        <Text>연락처</Text>
        <input
          name="buyerPhone"
          value={formPhoneNumber(buyerUser.buyerValue?.buyerPhone)}
          type="tel"
          placeholder={formPhoneNumber(buyerUser.buyerValue?.buyerPhone)}
          onChange={inputChange}
          maxLength={11}
          className="w-[55vw] h-[3rem] pl-2 border-none outline-none rounded-lg bg-slate-100"    />
      </StyledCol>
      <StyledCol>
        <Text>주소</Text>
        <input
          name="buyerAddress"
          value={buyerUser.buyerValue?.buyerAddress}
          type="text"
          placeholder={buyerUser.buyerValue?.buyerAddress}
          onChange={inputChange}
          className="w-[55vw] h-[3rem] pl-2 border-none outline-none rounded-lg bg-slate-100"
        />
      </StyledCol>
    </FormContainer>
    </>
  );
};
