'use client';

import { authClient } from '@/lib/client/auth-client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import z from 'zod/v4';

export default function SignUp() {
  const router = useRouter();
  const formSchema = z.object({
    email: z.email('invalid email'),
    name: z.string().min(2, 'too short'),
    password: z.string().min(8, 'password must be more than 8 symbols long'),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {} as z.infer<typeof formSchema>,
  });

  const onFormSubmit = async (data: z.infer<typeof formSchema>) => {
    await authClient.signUp.email(
      {
        email: data.email,
        name: data.name,
        password: data.password,
      },
      {
        onSuccess: () => {
          toast.success('Вы успешно зарегистрировались');
          router.push('/');
        },
      },
    );
  };

  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center gap-6">
      <form
        onSubmit={form.handleSubmit(onFormSubmit)}
        className="flex flex-col gap-4 w-62.5"
      >
        <input
          {...form.register('email')}
          type="text"
          className="flex text-black bg-gray-200 border p-4 text-[14px] rounded-xl"
          placeholder="Почта"
        />
        <input
          {...form.register('name')}
          type="text"
          className="flex text-black bg-gray-200 border p-4 text-[14px] rounded-xl"
          placeholder="Имя"
        />
        <input
          {...form.register('password')}
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
