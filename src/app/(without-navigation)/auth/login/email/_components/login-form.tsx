'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: '올바른 이메일 형식이 아닙니다.' }),
  password: z.string().min(1, ''),
});

const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof formSchema>
  > = async formData => {
    const response = await signIn('credentials', {
      ...formData,
      redirect: false,
    });
    if (response?.error === 'CredentialsSignin') {
      return form.setError('password', {
        message: '이메일 또는 비밀번호가 일치하지 않습니다.',
      });
    }

    router.push('/');
  };

  return (
    <Form {...form}>
      <form className="flex h-full flex-col gap-5 px-10">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input placeholder="이메일 주소를 입력해주세요." {...field} />
              </FormControl>
              {form.formState.errors.email && <FormMessage />}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input
                  placeholder="비밀번호를 입력해주세요."
                  type="password"
                  {...field}
                />
              </FormControl>
              {form.formState.errors.password && <FormMessage />}
            </FormItem>
          )}
        />
      </form>
      <Button
        size="big"
        className="mt-auto"
        type="submit"
        disabled={!form.formState.isValid}
        onClick={form.handleSubmit(onSubmit)}
      >
        로그인
      </Button>
    </Form>
  );
};

export default LoginForm;
