import {useState} from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import test from "../../img/test.png";
import { Link } from 'react-router-dom';


const SmallComponent = styled.img`
  width: 100%; 
  height: auto;
  max-height: calc(30vh);
  object-fit: contain;
  margin-bottom: 5vh;
`;

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
const Button = styled.button`
    padding: 0.2vw 1vw;
`;
const TextWrapper = styled.div`
  margin-bottom: 5vh;
  margin-left:10vh;
  justify-content: flex-start;
  display: flex;
  cursor: pointer;
`;
const ButtonsWrapper = styled.div`
  margin-bottom: 10vh;
  gap: 1vw;
  justify-content: flex-end;
  display: flex;
  
`;
const HorizontalRow = styled(Row)`
  display: flex;
  justify-content: space-around;
  gap: 10vw;
  margin-bottom: 2vh;
`;

export const Category = () => {
  return (
  <>
    <TextWrapper>
        <h1>과일</h1>
    </TextWrapper>
    
    <CenteredContainer>
      <div>
        <Container className="p-5">
        <ButtonsWrapper>
          <Button><Link to="/search">최신순</Link></Button>
          <Button><Link to="/search">조회순</Link></Button>
          <Button><Link to="/search">리뷰순</Link></Button>
        </ButtonsWrapper>
          <HorizontalRow className="p-5">
            <div>
            <Link to="/category">
              <SmallComponent src={test} alt="react"/>
            </Link>
            </div>
            <div>
            <Link to="/category">
              <SmallComponent src={test} alt="react"/>
            </Link>
            </div>
            <div>
            <Link to="/category">
              <SmallComponent src={test} alt="react"/>
            </Link>
            </div>
          </HorizontalRow>
          <HorizontalRow className="p-5">
            <div>
            <Link to="/category">
              <SmallComponent src={test} alt="react"/>
            </Link>
            </div>
            <div>
            <Link to="/category">
              <SmallComponent src={test} alt="react"/>
            </Link>
            </div>
            <div>
            <Link to="/category">
              <SmallComponent src={test} alt="react"/>
            </Link>
            </div>
          </HorizontalRow>
        </Container>
      </div>
    </CenteredContainer>
    </>
  );
};
