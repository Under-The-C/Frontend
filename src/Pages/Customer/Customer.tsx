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
`;

const ProductInfo = styled.div`
  margin-bottom: 1vw;
  text-align: center;
`;

const StyledCol = styled(Col)`
  justify-content: flex-end; 
  margin-top:1vw;
  
`;


const StyledRow = styled(Row)`
  justify-content: Center; 
  width:20vw;
  
`;

const Button = styled(BootstrapButton)`
  margin-right: 1vh;
  margin-bottom: 1.6vh;
  display: inline-block;
`;



export const Customer = () => {
  const navigate = useNavigate();
  const { data: buyItem, isLoading, isError } = useProduct();
  const buy = useRecoilValue(buyState);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/paymentPage");
  };

  const productBox = (buyItem: SalesDto) => {
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
              <StyledRow>
                <Button type="submit" className="bg-mainGreen w-36">
                  <span>구매하기</span>
                </Button>
                <Button className="bg-mainGreen w-36">
                  <span>장바구니</span>
                </Button>
              </StyledRow>
            </StyledCol>
          </Row>
        </form>
      </MainContainer>
    </>
  );
};
