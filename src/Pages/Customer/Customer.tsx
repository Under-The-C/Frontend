import React from 'react';
import { buyState } from "../../Atom/buy";
import { useRecoilState, useRecoilValue } from "recoil";
import { Navigate, useNavigate } from "react-router-dom";
import { Button as BootstrapButton, Container, Col, Row, FormControl} from "react-bootstrap";
import { useProduct } from "./api";
import styled from "styled-components";
import { DropBar } from './DropBar';
import { buyState1 } from './product';
import { BuyItem } from '../../interface/buy';
import { SellerLink } from './sellerLink';
const MainImage = styled(Col)`
  margin-left:15vw;
  margin-right: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  display: block;
`;

const MainContainer = styled(Container)`
  margin-top: 5vw;
  margin-bottom:10vw;
`;

const ProductInfo = styled.div`
  margin-bottom: 1vw;
  text-align: center;
  justify-content: flex-end; 
  display: flex;
  margin-top:1vw;
  margin-right:15vw;
`;

const ProductInfo1 = styled.div`
  margin-bottom: 1vw;
  margin-right:15vw;
  text-align: center;
  justify-content: center; 
  display: flex;
  margin-top:1vw;
  font-size:2rem;
`;

const TextBox = styled.div`
  justify-content: center; 
  display: flex;
  font-size: 2rem;
  max-height: calc(30vh);
`;

const TestArea = styled(Container)`
  margin-top:5vw;
  
`
const TextCol = styled(Col)`
  margin-top:5vw;
  justify-content: center; 
  display: flex;
`;

const Button = styled(BootstrapButton)`
  margin-bottom: 1.6vh;
  margin-left:2vh;
  width:30%;
  display: flex;
  height: auto;
  justify-content: center;
`;

const ImageBox = styled.img`
  margin-top: 5vw;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  display: block;
`;


export const Customer = () => {
  const navigate = useNavigate();
  const { data: buyItem, isLoading, isError } = useProduct();
  const buy = useRecoilValue(buyState1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/paymentPage");
  };

  const productBox = () => {
    navigate("/productBox");
  };

  return (
    <>
      <MainContainer>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} md={6}>
              <MainImage>
              <img src={buy.mainImage} alt={buy.productName} />
              </MainImage>
            </Col>
            <Col xs={12} md={6}>
              <ProductInfo1>
                <h3>{buy.productName}</h3>
              </ProductInfo1>
              <ProductInfo>
                <p>{buy.price}</p>
                
              </ProductInfo>
              <ProductInfo>
                <p>{buy.description}</p>
              </ProductInfo>
              <Row>

                  <DropBar />

              </Row>
              <Row>
                <Button type="submit" className="bg-mainGreen">
                      <span>구매하기</span>
                </Button>
              </Row>
              <Row>
                <Button className="bg-mainGreen">
                      <span>장바구니</span>
                </Button>  
              </Row>
            </Col>
          </Row>
        </form>
        </MainContainer>
        <SellerLink/>
        <TestArea>
        <TextBox>
        판매기간: {buy.saleStartDate}~{buy.saleEndDate}
        </TextBox>
        <ImageBox src={buy.detailImage[0]}/>

        <TextBox>
            <TextCol>{buy.subTitle}</TextCol>
        </TextBox>
            <TextCol>{buy.subDescription}</TextCol>

        <ImageBox src={buy.detailImage[1]}/>
        <TextCol>추가설명글1</TextCol>
        <ImageBox src={buy.detailImage[2]}/>
        <TextCol>추가설명글2</TextCol>
        </TestArea>
    </>
  );
};
