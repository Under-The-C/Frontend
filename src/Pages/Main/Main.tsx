import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import test from "../../img/test.png";
import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  
`;
const HorizontalRow = styled(Row)`
  display: flex;
  justify-content: space-around;
  gap: 10vw;
`;
const TopComponent = styled.img`
  width: 100%;
  height: auto;
  max-height: calc(60vh);
  object-fit: contain;
  margin-top: 2vh;
`;
const SmallComponent = styled.img`
  width: 100%; 
  height: auto;
  max-height: calc(30vh);
  object-fit: contain;
  margin-bottom: 5vh;
`;
export const Main = () => {
  /*
	const { isLoading, isError, data } = useQuery([],  {
			 
			//기본 캐시 타임 == 5min
		});
		if (isLoading)
		return <h2>Loading...</h2>
		
		if (isError)
			return <h2>Error...</h2>
*/
  return (
    <>
    <TopComponent src={test} alt="react" />
    <CenteredContainer>
      <div>
        <Container className="p-5">
          <HorizontalRow className="p-5">
            <div>
            <Link to="/Category/Fruit">
              <SmallComponent src={test} alt="react"/>
            </Link>
            </div>
            <div>
            <Link to="/Category/Vegetable">
              <SmallComponent src={test} alt="react"/>
            </Link>
            </div>
            <div>
            <Link to="/Category/Cereal">
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



