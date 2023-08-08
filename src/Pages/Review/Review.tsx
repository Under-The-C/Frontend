// 리뷰 페이지 작성
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Review = () => {
  // hook
  const navigate = useNavigate()

  // state
  let [title, setTitle] = useState<string>('')
  let [content, setContent] = useState<string>('')

  const formSubmit = (e: any) => {
    e.preventDefault()

    if(title.length === 0) {
      alert('제목을 입력해 주세요.')
    } else if(content.length === 0) {
      alert('내용을 입력해 주세요.')
    } else {
      if(window.confirm('리뷰를 등록하시겠습니까?')) {
        axios.post('http://localhost:3000/review', {
          title: title,
          content: content
        })
          .then(function(response) {
            alert('리뷰가 등록되었습니다.')
            navigate('/')
          })

          .catch(function(error) {
            console.log(error)
          })
      } else {
        return false
      }
    }
  }


  return (
null
  )
}

export default Review