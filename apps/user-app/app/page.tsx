import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/transfer");
  } else {
    redirect("/api/auth/signin");
  }
}
