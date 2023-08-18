import {useEffect,useState} from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { productDto } from "../../interface/product";
import { buyItemState, buyState } from "../../Atom/buy";
import axiosInstance from "../../API/axios";
import { BuyItem } from "../../interface/buy";

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

const MainContainer = styled(Container)`
  padding-bottom: 10vh;
  
`;

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width:80vw;
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
  
`;

const Wrapper = styled.div`
  display:flex;
`;

const WrapperText = styled.div`
  display:flex;
  flex-direction: column;
  
`;

const WrapperStar = styled.div`
  display:flex;
  justify-contens:space-between;
`;


export const Main = () => {
  const [category1Products, setCategory1Products] = useState<Array<BuyItem>>([]);
  const [category2Products, setCategory2Products] = useState<Array<BuyItem>>([]);
  const [category3Products, setCategory3Products] = useState<Array<BuyItem>>([]);

  useEffect(() => {
    const fetchBuyInfo = async (category:string, sortBy: string) => {
      try {
        const response = await axiosInstance.get(`/v1/sale_product/caterory_all`, {
          params: {
            category,
            sortBy,
          },
        });
        if (response.status === 200) {
          switch (category) {
            case '카테고리1':
              setCategory1Products(response.data);
              break;
            case '카테고리2':
              setCategory2Products(response.data);
              break;
            case '카테고리3':
              setCategory3Products(response.data);
              break;
            default:
              break;
          }
          console.log(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    //fetchBuyInfo();
    fetchBuyInfo('카테고리1', '조회순');
    fetchBuyInfo('카테고리2', '조회순');
    fetchBuyInfo('카테고리3', '조회순');
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
            <span style={{fontSize:"1.3rem"}}>과일 대표 게시글</span>
              <Link to="/Category/과일">
                <SmallComponent src={category1Products[0].mainImage} alt="react" />
                <WrapperText>
                <span style={{fontSize:"1.5rem"}}>{category1Products[0].name}</span>
                <span style={{marginLeft:"0.5vw",fontSize:"1rem"}}>{category1Products[0].price}원</span>
                <Wrapper>
                <img src={require("../../public/images/Star.png")} alt="" className="w-5 h-5" style={{marginLeft:"1.2vw"}}/>
                <Col>
                <span style={{marginRight:"0.5vw"}}>{category1Products[0].averageReviewPoint}</span>
                (<span>{category1Products[0].viewCount}</span>)
                </Col>         
                </Wrapper>
                </WrapperText>
              </Link>
            </Col>
            <Col>
            <span style={{fontSize:"1.3rem"}}>채소 대표 게시글</span>
              <Link to="/Category/과일">
                <SmallComponent src={category2Products[0].mainImage} alt="react" />
                <WrapperText>
                <span style={{fontSize:"1.5rem"}}>{category2Products[0].name}</span>
                <span style={{marginLeft:"0.5vw",fontSize:"1rem"}}>{category2Products[0].price}원</span>
                <Wrapper>
                <img src={require("../../public/images/Star.png")} alt="" className="w-5 h-5" style={{marginLeft:"1.2vw"}}/>
                <Col>
                <span style={{marginRight:"0.5vw"}}>{category2Products[0].averageReviewPoint}</span>
                (<span>{category2Products[0].viewCount}</span>)
                </Col>         
                </Wrapper>
                </WrapperText>
              </Link>
            </Col>
            <Col>
            <span style={{fontSize:"1.3rem"}}>쌀,견과,곡물 대표 게시글</span>
              <Link to="/Category/과일">
                <SmallComponent src={category3Products[0].mainImage} alt="react" />
                <WrapperText>
                <span style={{fontSize:"1.5rem"}}>{category3Products[0].name}</span>
                <span style={{marginLeft:"0.5vw",fontSize:"1rem"}}>{category3Products[0].price}원</span>
                <Wrapper>
                <img src={require("../../public/images/Star.png")} alt="" className="w-5 h-5" style={{marginLeft:"1.2vw"}}/>
                <Col>
                <span style={{marginRight:"0.5vw"}}>{category3Products[0].averageReviewPoint}</span>
                (<span>{category3Products[0].viewCount}</span>)
                </Col>         
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
