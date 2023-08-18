import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import axiosInstance from "../API/axios";
import { loginState, userState } from "../Atom/user";

export const DeleteSuccess = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);

  const logout = async () => {
    localStorage.removeItem("recoil-persist");
    localStorage.clear();
    const res = await axiosInstance.get("/v1/logout");
    window.location.reload();
    setLoggedIn(false);
    navigate("/");
  };

  logout();

  return null;
};
