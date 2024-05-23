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
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().optional(),
  gender: z
    .union([z.literal('Male'), z.literal('Female'), z.null()])
    .optional(),
  ageRange: z
    .union([
      z.literal('10'),
      z.literal('20'),
      z.literal('30'),
      z.literal('40'),
      z.literal('50'),
      z.literal('60'),
      z.literal('70'),
      z.literal('80'),
      z.null(),
    ])
    .optional(),
  location: z.string().optional().nullable(),
});

const genderButtons: {
  value: 'Male' | 'Female' | null;
  buttonText: string;
}[] = [
  { value: 'Male', buttonText: '남성' },
  { value: 'Female', buttonText: '여성' },
  { value: null, buttonText: '선택안함' },
];

const ageRangeButtons: {
  value: '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | null;
  buttonText: string;
}[] = [
  { value: '10', buttonText: '10대' },
  { value: '20', buttonText: '20대' },
  { value: '30', buttonText: '30대' },
  { value: '40', buttonText: '40대' },
  { value: '50', buttonText: '50대' },
  { value: '60', buttonText: '60대' },
  { value: '70', buttonText: '70대' },
  { value: '80', buttonText: '80대 이상' },
  { value: null, buttonText: '선택안함' },
];

const locationButtons: {
  value: 'Seoul' | 'Gyeonggi' | null;
  buttonText: string;
}[] = [
  { value: 'Seoul', buttonText: '서울' },
  { value: 'Gyeonggi', buttonText: '경기' },
  { value: null, buttonText: '선택안함' },
];

export default function SignUpExtraOptionalPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    router.push('/?from=signup');
  };

  return (
    <Form {...form}>
      <form className="flex h-full flex-col px-10 pt-10">
        <span className="mb-10 font-medium">프로필 정보를 입력해주세요.</span>

        <Label className="mb-1.5">프로필 사진</Label>
        <Image
          src="/images/logo/Logo_Image_Main_Moharu.png"
          alt="프로필 사진"
          width={100}
          height={100}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mt-10">
              <FormLabel>이름/닉네임</FormLabel>
              <FormControl>
                <Input type="text" defaultValue={'이름'} {...field} />
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
              }}
              className="flex h-fit items-center gap-3"
            >
              {buttonText}
            </Button>
          ))}
        </div>

        <Label className="mb-1.5 mt-10">지역 (선택)</Label>
        <div className="flex gap-1.5 ">
          {locationButtons.map(({ value, buttonText }) => (
            <Button
              key={`gender-${value}`}
              type="button"
              variant={form.watch('location') === value ? 'default' : 'outline'}
              onClick={() => {
                form.setValue('location', value, {
                  shouldValidate: true,
                });
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
