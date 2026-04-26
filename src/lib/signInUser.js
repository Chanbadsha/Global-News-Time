import { authClient } from "./auth-client";

const signInUser = async (userInfo) => {
  const user = {
    ...userInfo,
    rememberMe: true,
    // callbackURL: "http://localhost:3000/",
  };

  const { data, error } = await authClient.signIn.email(user);
  return { data, error };
};

export default signInUser;
