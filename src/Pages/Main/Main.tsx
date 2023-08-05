import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import fruit from "../../img/peach.jpg";
import vegetable from "../../img/vagetable.jpg";
import cereal from "../../img/Cereal.jpg";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";

const MainContainer = styled(Container)`
  padding-bottom: 10vh;
`;

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

const TopComponent = styled.img`
  width: 100%;
  height: auto;
  max-height: calc(40vh);
  object-fit: contain;
  margin-top: 2vh;
  margin-bottom: 5vh;
`;

const SmallComponent = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
`;

export const Main = () => {
  // ...
  return (
    <>
    <MainContainer>
      <Row className="p-5">
        <TopComponent src={fruit} alt="react" />
      </Row>
      <CenteredContainer>
        <Container className="p-5">
          <Row className="p-5">
            <Col>
              <Link to="/Category/Fruit">
                <SmallComponent src={fruit} alt="react" />
              </Link>
            </Col>
            <Col>
              <Link to="/Category/Vegetable">
                <SmallComponent src={vegetable} alt="react" />
              </Link>
            </Col>
            <Col>
              <Link to="/Category/Cereal">
                <SmallComponent src={cereal} alt="react" />
              </Link>
            </Col>
          </Row>
        </Container>
      </CenteredContainer>
      </MainContainer>
    </>
  );
};
