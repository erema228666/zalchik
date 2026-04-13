"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { authClient } from "../../../lib/client/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignIn() {
  const router = useRouter();
  
  const formSchema = z.object({
    email: z.email("Invalid email"),
    password: z.string().min(1, "Password is required"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {} as z.infer<typeof formSchema>,
  });

  const onFormSubmit = async (data: z.infer<typeof formSchema>) => {
    const result = await authClient.signIn.email({
      email: data.email,
      password: data.password,
    });

    if (result.data) {
      toast.success('Вы успешно вошли в аккаунт');
      router.push("/");
      router.refresh();
    } else if (result.error) {
      console.error("Login error:", result.error);
    }
  };

  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center gap-6">
      <form
        onSubmit={form.handleSubmit(onFormSubmit)}
        className="flex flex-col gap-4 w-62.5"
      >
        <input
        {...form.register("email")}
          type="text"
          className="flex text-black bg-gray-200 border p-4 text-[14px] rounded-xl"
          placeholder="Почта"
        />
        <input
        {...form.register("password")}
          type="text"
          className="flex text-black bg-gray-200 border p-4 text-[14px] rounded-xl"
          placeholder="Пароль"
        />
        <button
          type="submit"
          className="p-4 bg-indigo-700 hover:bg-indigo-600 rounded-2xl text-white flex items-center justify-center"
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}