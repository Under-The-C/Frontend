import "./App.css";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from "./Pages/Main/Main";
import { Customer } from "./Pages/Customer/Customer";
import { Category } from "./Pages/Categories/Category";
const App = () => {
  return (
    <>
    <RecoilRoot>
      <BrowserRouter>  
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Category/:itemName" element={<Category/>}/>
          <Route path="/Customer" element={<Customer/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
    </>
  )
}

export default App;