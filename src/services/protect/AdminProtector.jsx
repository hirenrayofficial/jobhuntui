import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export default async function AdminProtector({ children }) {
  const SECRET_KEY = "secjobhunt@sfnsjkjksdds65vjhbjhasd";
  
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      redirect("/");
    }

    const verify = jwt.verify(token, SECRET_KEY);
    const trust = verify?.user?.user_role === "admin";

    if (!trust) {
      redirect("/");
    }
  } catch (error) {
    // Catches jwt verification errors (expired/malformed tokens) and redirects
    redirect("/");
  }

  return children;
}