"use client";
import React from "react";
import { useStateContext } from "@/hook/StateContext";
import LoginPage from "./LoginPage";
import { useRouter } from "next/navigation";

const AuthenticationFlow = () => {
  const { authentication } = useStateContext();
  const router = useRouter();
  if (authentication) {
    return router.push("/Dashboard");
  }
  return <>{!authentication && <LoginPage />}</>;
};

export default AuthenticationFlow;
