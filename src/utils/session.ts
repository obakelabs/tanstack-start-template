import { createServerFn } from "@tanstack/react-start";
import { getHeaders } from "@tanstack/react-start/server";
import { authClient } from "~/lib/auth-client";

export const getSession = createServerFn().handler(async () => {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: getHeaders() as HeadersInit,
    },
  });

  return session.data;
});
