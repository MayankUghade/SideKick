import Dashboard from "@/components/Dashboard/Dashboard";
import { LandingPage } from "@/components/LandingPage";
import { Navbar } from "@/components/Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return <div>{user ? <Dashboard /> : <LandingPage />}</div>;
}
