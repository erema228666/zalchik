"use client"

import { useEffect } from "react";
import { authClient } from "../../../lib/client/auth-client";
import { useRouter } from "next/navigation";
import { Irish_Grover } from "next/font/google";
import { toast } from "sonner";



export default function SignOut() {
    const router = useRouter()
  useEffect(() => {
    const signout = async () => {
      await authClient.signOut();
      toast.success('Вы успешно вышли из аккаунта')
      router.push("/")
    };

    signout();
    
  });

  return null;
  
}