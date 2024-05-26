'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { fetchWithToken } from '@/lib/fetch';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { z } from 'zod';
import { signUpInformationState } from '../_recoil/atom';

const formSchema = z.object({
  name: z.string().optional(),
  gender: z
    .union([z.literal('male'), z.literal('female'), z.literal('etc')])
    .optional(),
  ageRange: z
    .union([
      z.literal('10대'),
      z.literal('20대'),
      z.literal('30대'),
      z.literal('40대'),
      z.literal('50대'),
      z.literal('60대'),
      z.literal('70대'),
      z.literal('80대 이상'),
      z.literal('etc'),
    ])
    .optional(),
  region: z.string().optional().nullable(),
  profileImage: z.string(),
});

const genderButtons: {
  value: 'male' | 'female' | 'etc';
  buttonText: string;
}[] = [
  { value: 'male', buttonText: '남성' },
  { value: 'female', buttonText: '여성' },
  { value: 'etc', buttonText: '선택안함' },
];

const ageRangeButtons: {
  value:
    | '10대'
    | '20대'
    | '30대'
    | '40대'
    | '50대'
    | '60대'
    | '70대'
    | '80대 이상'
    | 'etc';
  buttonText: string;
}[] = [
  { value: '10대', buttonText: '10대' },
  { value: '20대', buttonText: '20대' },
  { value: '30대', buttonText: '30대' },
  { value: '40대', buttonText: '40대' },
  { value: '50대', buttonText: '50대' },
  { value: '60대', buttonText: '60대' },
  { value: '70대', buttonText: '70대' },
  { value: '80대 이상', buttonText: '80대 이상' },
  { value: 'etc', buttonText: '선택안함' },
];

const regionButtons: {
  value: string;
  buttonText: string;
}[] = [
  { value: '강남', buttonText: '강남' },
  { value: '서초', buttonText: '서초' },
  { value: '중구', buttonText: '중구' },
  { value: '송파', buttonText: '송파' },
  { value: '영등포', buttonText: '영등포' },
  { value: '마포', buttonText: '마포' },
  { value: '강서', buttonText: '강서' },
  { value: '용산', buttonText: '용산' },
  { value: '종로', buttonText: '종로' },
  { value: '노원구', buttonText: '노원구' },
  { value: 'etc', buttonText: '선택안함' },
];

export default function SignUpExtraOptionalPage() {
  const { data: session } = useSession();
  const [signUpInfo, setSignUpInfo] = useRecoilState(signUpInformationState);
  const resetSignInfo = useResetRecoilState(signUpInformationState);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: session?.user?.name || signUpInfo.name || '',
      profileImage: '/images/logo/Logo_Image_Main_Moharu.png',
      gender: signUpInfo.gender,
      ageRange: signUpInfo.ageRange,
      region: signUpInfo.region,
    },
  });
  const profileImageUrl = form.watch('profileImage');

  useEffect(() => {
    if (session) form.setValue('profileImage', session.user.profileImage);
  }, [session]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...signUpInfo }),
    };
    if (session) {
      const response = await fetchWithToken(
        'https://api.moharu.site/user/update',
        options,
      );
      const data = await response.json();

      if (response.ok) {
        resetSignInfo();
        signIn(data.socialType, {
          redirect: true,
          callbackUrl: '/?from=signup',
        });
      }
    } else {
      const response = await fetch(
        `https://api.moharu.site/auth/register`,
        options,
      );
      if (response.ok) {
        resetSignInfo();
        signIn('credentials', {
          email: signUpInfo.email,
          password: signUpInfo.password,
          redirect: true,
          callbackUrl: '/?from=signup',
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form className="mb-48px flex h-full flex-col px-10 pt-10">
        <span className="mb-10 font-medium">프로필 정보를 입력해주세요.</span>

        <Label className="mb-1.5">프로필 사진</Label>
        <Image
          src={profileImageUrl}
          alt="프로필 사진"
          width={100}
          height={100}
          className="rounded-lg"
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mt-10">
              <FormLabel>이름/닉네임</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                  onChange={e => {
                    form.setValue('name', e.target.value, {
                      shouldValidate: true,
                    });
                    setSignUpInfo({ ...signUpInfo, name: e.target.value });
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Label className="mb-1.5 mt-10">성별 (선택)</Label>
        <div className="flex gap-1.5">
          {genderButtons.map(({ value, buttonText }) => (
            <Button
              key={`gender-${value}`}
              type="button"
              variant={form.watch('gender') === value ? 'default' : 'outline'}
              onClick={() => {
                form.setValue('gender', value, {
                  shouldValidate: true,
                });
                setSignUpInfo({ ...signUpInfo, gender: value });
              }}
              className="flex h-fit items-center gap-3"
            >
              {buttonText}
            </Button>
          ))}
        </div>

        <Label className="mb-1.5 mt-10">연령대 (선택)</Label>
        <div className="flex w-full flex-wrap gap-1.5">
          {ageRangeButtons.map(({ value, buttonText }) => (
            <Button
              key={`gender-${value}`}
              type="button"
              variant={form.watch('ageRange') === value ? 'default' : 'outline'}
              onClick={() => {
                form.setValue('ageRange', value, {
                  shouldValidate: true,
                });
                setSignUpInfo({ ...signUpInfo, ageRange: value });
              }}
              className="flex h-fit items-center gap-3"
            >
              {buttonText}
            </Button>
          ))}
        </div>

        <Label className="mb-1.5 mt-10">지역 (선택)</Label>
        <div className="flex w-full flex-wrap gap-1.5">
          {regionButtons.map(({ value, buttonText }) => (
            <Button
              key={`gender-${value}`}
              type="button"
              variant={form.watch('region') === value ? 'default' : 'outline'}
              onClick={() => {
                form.setValue('region', value, {
                  shouldValidate: true,
                });
                setSignUpInfo({ ...signUpInfo, region: value });
              }}
              className="flex h-fit items-center gap-3"
            >
              {buttonText}
            </Button>
          ))}
        </div>
      </form>

      <Button
        size="big"
        className="mt-auto"
        type="submit"
        disabled={!form.formState.isValid}
        onClick={form.handleSubmit(onSubmit)}
      >
        완료
      </Button>
    </Form>
  );
}
