import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
  baseURL: "https://global-news-time.vercel.app/",
});

export const { signIn, signUp, signOut, getSession, useSession } = authClient;
