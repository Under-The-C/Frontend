import { atom } from "recoil";
import { UserDto } from "../interface/user";

export const loginState = atom({
  key: "loginState",
  default: false,
});

export const userState = atom<UserDto>({
  key: "userState",
  default: {
    id: 0,
    name: "",
    email: "",
    role: "", // "admin" | "customer" | "seller" ? 모름
  },
});
