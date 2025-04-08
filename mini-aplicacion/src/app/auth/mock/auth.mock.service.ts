import { Login } from "../../model/login";

const mockUser: Login = {
  username: "curso",
  password: "angular"
}

export const login = (data:Login) => {
  // setTimeout(()=>{

  // },3000);
  if (data) {
    return data.username===mockUser.username && data.password===mockUser.password;
  }
  return false;
}

export const logout = () => {

}


