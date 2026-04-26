import { authClient } from "./auth-client";

const signUpUser = async (userInfo) => {
  const user = { ...userInfo, callbackURL: "http://localhost:3000/" };
  //   console.log(user);
  const { data, error } = await authClient.signUp.email(user);
  return { data, error };
};

export default signUpUser;
