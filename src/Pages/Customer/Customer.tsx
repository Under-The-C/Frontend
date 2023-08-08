import React from 'react';
import { buyState } from "../../Atom/buy";
import { useRecoilState, useRecoilValue } from "recoil";
import { SalesDto } from "../../interface/sales";
import { Navigate, useNavigate } from "react-router-dom";
import { Button as BootstrapButton, Container, Col, Row, FormControl} from "react-bootstrap";
import { useProduct } from "./api";
import styled from "styled-components";
import { DropBar } from './DropBar';

const MainContainer = styled(Container)`
  margin-top: 5vw;
  margin-bottom:10vw;
`;

const ProductInfo = styled.div`
  margin-bottom: 1vw;
  text-align: center;
  justify-content: flex-end; 
  display: flex;
`;

const StyledCol = styled(Col)`
  justify-content: flex-end; 
  margin-top:1vw;
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
`;

const StyledRow = styled(Row)`
  justify-content: Center; 
  width:20vw;
  justify-content: flex-end; 
  display: flex;
`;

const Button = styled(BootstrapButton)`
  margin-right: 1vh;
  margin-bottom: 1.6vh;
  display: inline-block;
`;

const ImageBox = styled.img`
  margin-top: 5vw;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  display: block;
`;


export const Customer = () => {
  const navigate = useNavigate();
  const { data: buyItem, isLoading, isError } = useProduct();
  const buy = useRecoilValue(buyState);

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
              <img src={buy.mainImage} alt={buy.productName} />
            </Col>
            <Col xs={12} md={6}>
              <ProductInfo>
                <h3>{buy.productName}</h3>
              </ProductInfo>
              <ProductInfo>
                <p>{buy.price}</p>
              </ProductInfo>
              <ProductInfo>
                <p>{buy.description}</p>
              </ProductInfo>
            </Col>
            <StyledCol>
              <StyledRow>
                <DropBar/>
              </StyledRow>
            </StyledCol>
              <StyledRow>
                <Button type="submit" className="bg-mainGreen w-36">
                  <span>구매하기</span>
                </Button>
                <Button className="bg-mainGreen w-36">
                  <span>장바구니</span>
                </Button>
              </StyledRow>
          </Row>
        </form>
        </MainContainer>
        
        <TestArea>
        <TextBox>
        판매기간: {buy.saleStartDate}~{buy.saleEndDate}
        </TextBox>
        <ImageBox src={buy.detailImage[0]}/>

        <TextBox>
            <TextCol>{buy.subTitle}</TextCol>
        </TextBox>
            <TextCol>{buy.subDescription}</TextCol>

        <ImageBox src={buy.detailImage[2]}/>
        <ImageBox src={buy.detailImage[0]}/>
        </TestArea>
    </>
  );
};
