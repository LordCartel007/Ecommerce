import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import client from "../../../lib/mongodb.js";
import { getServerSession } from "next-auth";

import GoogleProvider from "next-auth/providers/google";

// const adminEmails = [];

export const authOptions = {
  providers: [
    // OAuth authentication providers...

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(client),
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({ session, token, user }) => {
      // if (adminEmails.includes(session?.user?.email)) {
      return session;
      // } else {
      //   return false;
      // }
    },
    debug: true, // Enable detailed logging
  },
};
export default NextAuth(authOptions);

// security measures
export async function isAdminRequest(req, res) {
  const session = await getServerSession(req, res, authOptions);
  // if (!adminEmails.includes(session?.user?.email)) {
  //   res.status(401).end("Unauthorized");
  //   throw new Error("not an admin");
  // }
}

// ----
