'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { authClient } from '../../../lib/client/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useState } from 'react';
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";


export default function SignIn() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formSchema = z.object({
    email: z.email('Invalid email'),
    password: z.string().min(1, 'Password is required'),
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
      router.push('/');
      router.refresh();
    } else if (result.error) {
      toast.error('Неверно введены данные');
      console.error('Login error:', result.error);
    }
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
          className="flex text-black bg-gray-200 border p-4 text-[14px] rounded-xl w-60 focus:outline-0"
          placeholder="Почта"
        />
        <div className='flex text-black bg-gray-200 border p-4  rounded-xl w-60'>
          <input
            {...form.register('password')}
            type={showPassword ? 'text' : 'password'}
            className="flex w-48 focus:outline-0"
            placeholder="Пароль"
          />
          <button
          type='button'
          className='text-[18px]'
          onClick={toggleShowPassword}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
        <button
          type="submit"
          className="p-4 bg-indigo-700 hover:bg-indigo-600 rounded-2xl text-white flex items-center justify-center w-60"
        >
          Войти
        </button>
      </form>
    </div>
  );
}
