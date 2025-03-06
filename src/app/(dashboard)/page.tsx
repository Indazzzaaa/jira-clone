import { getCurrent } from "@/features/auth/action";
import { redirect } from "next/navigation";

// we can create async component in server components.
export default async function Home() {
  const user = await getCurrent();

  if (!user) redirect("/sign-in"); // we can use redirect in server component.

  return <div>This is a home page.</div>;
}
