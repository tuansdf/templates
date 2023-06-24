import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/lib/next-auth";

export default async function Home() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return <main>Next App</main>;
}
