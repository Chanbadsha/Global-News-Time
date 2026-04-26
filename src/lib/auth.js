import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.AUTHDB_URL);
const db = client.db("GLobalNewsDB");
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, { client }),
});
