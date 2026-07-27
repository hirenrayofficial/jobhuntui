"use client";
import Submitbt from "@/hooks/button/admin/Submitbt";
import { LoginNow } from "@/services/api/home/login";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

export default function LoginDesign() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  const handelLogin = async () => {
    const loginPromise = (async () => {
      const res = await LoginNow(email, pass);
      if (!res.login) {
        throw new Error(res?.message || "Invalid credentials");
      }

      return res;
    })();

    toast.promise(loginPromise, {
      loading: "Under Process...",
      success: (data) => {
        router.push("/admin/slider");
        return "Approved Successfully!";
      },
      error: (err) => {
        return err?.message || "Failed to approve";
      },
    });
  };

  return (
    <div className="login-main h-[100vh] bg-[#F1F5FA]  w-full flex justify-center items-center">
      <div className="login-container w-full flex  items-center justify-center ">
        <div className="Login-card w-full flex max-w-[500px] grid  gap-4  ">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 outline-none py-2 px-4 rounded-md"
          />
          <input
            type="text"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full border border-gray-300 outline-none py-2 px-4 rounded-md"
          />
          <div className="login-bt">
            <Submitbt label={"Login Now"} click={handelLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}
