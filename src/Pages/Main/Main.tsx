import {useEffect,useState} from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { productDto } from "../../interface/product";
import { buyItemState } from "../../Atom/buy";
import axiosInstance from "../../API/axios";

<<<<<<< HEAD
=======
const dummydata: productDto[] = [
  {
    id: 1,
    seller_id: 1,
    name: "테스트",
    subTitle: "테스트",
    price: 1000,
    description: "테스트",
    subDescription: "테스트",
    main_image: "https://picsum.photos/300",
    detailImage: ["https://i.imgur.com/1QZzX3j.png"],
    keyword: ["test"],
    saleStartDate: "2021-09-01",
    saleEndDate: "2023-09-01",
    category: "채소",
    viewCount: 12,
    createdAt: "2021-09-01",
    rating: 4.5,
  },
  {
    id: 2,
    seller_id: 2,
    name: "테스트",
    subTitle: "테스트",
    price: 1000,
    description: "테스트",
    subDescription: "테스트",
    main_image: "https://picsum.photos/100",
    detailImage: ["https://i.imgur.com/1QZzX3j.png"],
    keyword: ["test"],
    saleStartDate: "2021-09-01",
    saleEndDate: "2023-09-01",
    category: "과일",
    viewCount: 12,
    createdAt: "2021-09-01",
    rating: 4.5,
  },
  {
    id: 3,
    seller_id: 3,
    name: "테스트",
    subTitle: "테스트",
    price: 1000,
    description: "테스트",
    subDescription: "테스트",
    main_image: "https://picsum.photos/500",
    detailImage: ["https://i.imgur.com/1QZzX3j.png"],
    keyword: ["test"],
    saleStartDate: "2021-09-01",
    saleEndDate: "2023-09-01",
    category: "채소",
    viewCount: 12,
    createdAt: "2021-09-01",
    rating: 4.5,
  },
  {
    id: 4,
    seller_id: 4,
    name: "테스트",
    subTitle: "테스트",
    price: 1000,
    description: "테스트",
    subDescription: "테스트",
    main_image: "https://picsum.photos/200",
    detailImage: ["https://i.imgur.com/1QZzX3j.png"],
    keyword: ["test"],
    saleStartDate: "2021-09-01",
    saleEndDate: "2023-09-01",
    category: "견과",
    viewCount: 12,
    createdAt: "2021-09-01",
    rating: 4.5,
  },
];
>>>>>>> a668efd92283fa5abbfa9469b0c17cf3822b1661
const MainContainer = styled(Container)`
  padding-bottom: 10vh;
  
`;

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const TopComponent = styled.img`
  width: 100%;
  height: auto;
  max-height: calc(40vh);
  object-fit: contain;
  margin-top: 2vh;
  
`;

const SmallComponent = styled.img`
  width: 15vw;
  height: 15vw;
  display: flex;
  justify-content: center;
  object-fit: contain;
  margin-left:4vw;
`;

const Wrapper = styled.div`
  display:flex;
`;
const WrapperText = styled.div`
  display:flex;
  flex-direction: column;
  margin-left:4vw;
`;
export const Main = () => {
  const [product, setProduct] = useState<productDto[]>(dummydata);
  
  const fetchBuyInfo = async () => {
    try {
      const response = await axiosInstance.get(
        "v1/sale_product/view_all"
      );
      console.log(response.data);
      if (response.status === 200) {
        setProduct(response.data);
        console.log(response.data);
      }
    } catch (error: any) {
      console.log(error);
      alert("");
    }
  };
  
  useEffect(() => {
    //fetchBuyInfo();
    setProduct(dummydata);
  }, []);

  return (
    <>
    <MainContainer>
      <Row className="p-5">
        <TopComponent src="https://picsum.photos/200" alt="react" />
      </Row>
      <CenteredContainer>
        <Container className="p-5">
          <Row className="p-5">
            <Col>
              <Link to="/Category/과일">
                <SmallComponent src={product[0].main_image} alt="react" />
                <WrapperText>
                <span style={{marginLeft:"1vw", fontSize:"1.5rem"}}>{product[0].name}</span>
                <Wrapper>
                <img src={require("../../public/images/Star.png")} alt="" className="w-5 h-5" style={{marginLeft:"1vw"}}/>
                <span>{product[0].rating}</span>
                </Wrapper>
                </WrapperText>
              </Link>
            </Col>
            <Col>
              <Link to="/Category/채소">  
                <SmallComponent src={product[1].main_image} alt="react" />
                <WrapperText>
                <span style={{marginLeft:"1vw", fontSize:"1.5rem"}}>{product[1].name}</span>
                <Wrapper>
                <img src={require("../../public/images/Star.png")} alt="" className="w-5 h-5" style={{marginLeft:"1vw"}}/>
                <span>{product[1].rating}</span>
                </Wrapper>
                </WrapperText>
              </Link>
            </Col>
            <Col>
              <Link to="/Category/견과">
                <SmallComponent src={product[2].main_image} alt="react" />
                <WrapperText>
                <span style={{marginLeft:"1vw", fontSize:"1.5rem"}}>{product[2].name}</span>
                <Wrapper>
                <img src={require("../../public/images/Star.png")} alt="" className="w-5 h-5" style={{marginLeft:"1vw"}}/>
                <span>{product[2].rating}</span>
                </Wrapper>
                </WrapperText>    
              </Link>
            </Col>
          </Row>
        </Container>
      </CenteredContainer>
      </MainContainer>
    </>
  );
};
