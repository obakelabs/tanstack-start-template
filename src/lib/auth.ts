import { db } from "~/db";
import { resend } from "~/utils/resend";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { magicLink } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "pg" }),

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  plugins: [
    magicLink({
      sendMagicLink: async ({ url, email }) => {
        await resend.emails.send({
          from: process.env.EMAIL_FROM!,
          to: email,
          subject: "Magic Link",
          html: `
          <p>Sign In to your account</p>
          <br/>
          <p>${url}</p>`,
        });
      },
    }),
  ],

  user: {
    deleteUser: {
      enabled: true,
      sendDeleteAccountVerification: async ({ url, user }) => {
        await resend.emails.send({
          from: process.env.EMAIL_FROM!,
          to: user.email,
          subject: "Confirmation Link",
          html: `
          <p>Confirmation Link</p>
          <br/>
          <p>${url}</p>`,
        });
      },
    },
  },
});
