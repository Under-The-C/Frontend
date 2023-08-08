// 리뷰 페이지 작성
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { Row, Col, Container } from 'react-bootstrap'
import peach from '../../img/peach.jpg'
import styled from "styled-components";

const CenteredContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Review = () => {
  // hook
  const navigate = useNavigate()

  // state
  const [star, setStar] = useState(0)
  const [content, setContent] = useState<string>('')
  const [img, setImg] = useState(0)

  // const formSubmit = (e: any) => {
  //   e.preventDefault()

  //   if(title.length === 0) {
  //     alert('제목을 입력해 주세요.')
  //   } else if(content.length === 0) {
  //     alert('내용을 입력해 주세요.')
  //   } else {
  //     if(window.confirm('리뷰를 등록하시겠습니까?')) {
  //       axios.post('http://localhost:3000/review', {
  //         title: title,
  //         content: content
  //       })
  //         .then(function(response) {
  //           alert('리뷰가 등록되었습니다.')
  //           navigate('/')
  //         })

  //         .catch(function(error) {
  //           console.log(error)
  //         })
  //       }
  //   }
  // }


  return (
    <Container>
      <form>
      <Row>
        <div style={{marginTop:"50px", marginBottom:"50px"}}>
          <span className="font-black text-3xl">리뷰남기기</span>
        </div>
      </Row>
      <Row>
        <Col style={{width:"500px"}}>
          <img src={peach} alt='peach' height="500" width="500"/>
        </Col>
        <Col>
          <span className="font-black text-xl">유기농 백도 1.8kg</span>
          <br/>
          <span>45,000원</span>
        </Col>
      </Row>
      <Row>
        <span className="font-black text-xl">별점</span>
      </Row>
      <Row>
        <span className="font-black text-xl">내용</span>
        <input></input>
      </Row>
      <Row>
        <span className="font-black text-xl">사진 등록</span> 
      </Row>
      </form>
    </Container>
  )
}

export default Review