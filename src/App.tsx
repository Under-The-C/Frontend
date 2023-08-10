import "./App.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./Pages/Main/Main";
import { Customer } from "./Pages/Customer/Customer";
import { Category } from "./Pages/Categories/Category";
import { Sales } from "./Pages/Sales/Sales";
import { ChooseRole } from "./Pages/SignUp/ChooseRole";
import { SignUp } from "./Pages/SignUp/SignUp";
import { Payment } from "./Pages/Payment/Payment";
import { MyPage } from "./Pages/MyPage/MyPage";
import { SellerMyPage } from "./Pages/Seller/SellerMyPage";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

import Review from "./Pages/Review/Review";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Category/:itemName" element={<Category />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/buy" element={<Customer />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/seller-my-page" element={<SellerMyPage />} />
            <Route path="/review-write" element={<Review />} />
            <Route path="/signup-choose-role" element={<ChooseRole />} />
            <Route path="/signup/:role" element={<SignUp />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
      <Footer />
    </>
  );
};

export default App;
