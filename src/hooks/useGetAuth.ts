import { auth } from "@clerk/nextjs/server";

export async function useGetAuth() {
  const { sessionClaims, userId } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  const currentUserId = userId;
  return { role, currentUserId };
}
