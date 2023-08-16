import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import { loginState } from "../Atom/user";

export const LoginSuccess = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useRecoilState(loginState);
  const [searchParam] = useSearchParams();

  const loginUser = async (token: string) => {
    try {
      const response = await axios.post(`/api/v1/login?access_token=${token}`);
      if (response.status === 200) {
        setLogin(true);
        navigate("/main");
      }
    } catch (error: any) {
      console.log(error);
      alert(`에러: ${error.message}`);
    }
  };

  useEffect(() => {
    //const parsed = queryString.parse(window.location.search);
    //const { access_token: accessToken } = parsed;
    //console.log(accessToken);

    //if (typeof accessToken === "string") {
    //  loginUser(accessToken);
    //} else {
    //  navigate("/loginPage");
    //}
    loginUser(searchParam.get("access_token") as string);
  }, []);

  return <div>로그인 처리 중...</div>;
};
