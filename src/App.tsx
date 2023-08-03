import "./App.css";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <>
    <RecoilRoot>
      <BrowserRouter>  
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
    </>
  )
}

export default App;