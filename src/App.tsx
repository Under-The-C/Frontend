import "./App.css";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from "./Pages/Main/Main";


const App = () => {
  return (
    <>
    <RecoilRoot>
      <BrowserRouter>  
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
    </>
  )
}

export default App;