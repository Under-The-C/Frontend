import { atom } from "recoil";
import { SignupStateDto } from "../interface/signup";

export const signupState = atom<SignupStateDto>({
  key: "signupState",
  default: {
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "",
    Image: "",
  },
});
