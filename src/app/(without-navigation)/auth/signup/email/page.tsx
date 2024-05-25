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
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Timer from '../_components/timer';
import { useSignUpContext } from '../_context/useSignUpContext';

const formSchema = z.object({
  email: z.string().email({ message: '올바른 이메일 형식이 아닙니다.' }),
  authenticationCode: z.string().min(6, ''),
});

export default function SignupEmailPage() {
  const router = useRouter();
  const { signUpInfo, setSignUpInfo } = useSignUpContext();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });
  const [time, setTime] = useState(0);
  const [
    emailAuthenticationCodeRequested,
    setEmailAuthenticationCodeRequested,
  ] = useState(false);

  const emailValue = form.watch('email');
  const authenticationCode = form.watch('authenticationCode');

  const RequestEmailAuthentication = () => {
    fetch('https://api.moharu.site/auth/send-verify-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: emailValue,
    });
    setTime(60 * 5);
  };

  const handleClickSendAuthenticationCodeButton = () => {
    RequestEmailAuthentication();
    setEmailAuthenticationCodeRequested(true);
  };

  const handleClickAuthenticationButton = async () => {
    const response = await fetch('https://api.moharu.site/auth/verify-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailValue,
        code: authenticationCode,
      }),
    });
    if (response.status === 201) {
      setSignUpInfo({ ...signUpInfo, email: emailValue });
      router.replace('/auth/signup/password');
    }
  };

  return (
    <Form {...form}>
      <form className="flex h-full flex-col gap-5 px-10 pt-10">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input placeholder="moharu.site@gmail.com" {...field} />
              </FormControl>
              {!form.formState.errors.email && (
                <FormDescription>
                  {!emailValue
                    ? '이메일 주소를 입력해주세요.'
                    : '올바른 이메일 형식입니다.'}
                </FormDescription>
              )}
              {form.formState.errors.email && <FormMessage />}
            </FormItem>
          )}
        />
        {emailAuthenticationCodeRequested && (
          <>
            <FormField
              control={form.control}
              name="authenticationCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>인증 코드</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="OOOOOO"
                      type="text"
                      maxLength={6}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.authenticationCode && <FormMessage />}
                  <FormDescription className="flex items-center justify-between">
                    <span>6자리 인증 코드를 입력해주세요.</span>
                    <Timer time={time} setTime={setTime} />
                  </FormDescription>
                </FormItem>
              )}
            />

            <div className="mt-10 flex items-center justify-between">
              <span className="text-slate-500">코드를 받지 못했다면</span>
              <Button
                variant="outline"
                type="button"
                onClick={RequestEmailAuthentication}
              >
                재전송
              </Button>
            </div>
          </>
        )}
      </form>
      {!emailAuthenticationCodeRequested && (
        <Button
          size="big"
          className="mt-auto"
          type="button"
          disabled={!!form.formState.errors.email || !emailValue}
          onClick={handleClickSendAuthenticationCodeButton}
        >
          인증코드 전송
        </Button>
      )}
      {emailAuthenticationCodeRequested && (
        <Button
          size="big"
          className="mt-auto"
          type="button"
          disabled={!form.formState.isValid}
          onClick={handleClickAuthenticationButton}
        >
          인증하기
        </Button>
      )}
    </Form>
  );
}
