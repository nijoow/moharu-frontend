'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z
  .object({
    password: z
      .string({
        errorMap: () => ({
          message: '8자 이상의 영문, 숫자, 특수문자 조합을 입력해주세요.',
        }),
      })
      .min(8)
      .max(20)
      .regex(/[a-zA-Z]/)
      .regex(/\d/)
      .regex(/[@$!%*#?&]/),
    confirmPassword: z.string({ required_error: '' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export default function SignUpPasswordPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const password = form.watch('password');
  const confirmPassword = form.watch('confirmPassword');

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    router.push('/auth/signup/extra-required');
  };

  return (
    <Form {...form}>
      <form className="flex h-full flex-col gap-5 px-10 pt-10">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  {...field}
                  onBlur={() => form.trigger('confirmPassword')}
                />
              </FormControl>
              {!form.formState.errors.password && !password?.length && (
                <FormDescription>
                  8자 이상의 영문, 숫자, 특수문자 조합을 입력해주세요.
                </FormDescription>
              )}
              {form.formState.errors.password && <FormMessage />}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호 확인</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              {!form.formState.errors.confirmPassword &&
                !confirmPassword?.length && (
                  <FormDescription>
                    동일한 비밀번호를 입력해주세요.
                  </FormDescription>
                )}
              {form.formState.errors.confirmPassword && <FormMessage />}
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
        다음으로
      </Button>
    </Form>
  );
}
