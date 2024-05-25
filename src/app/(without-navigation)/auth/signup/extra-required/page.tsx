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
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { z } from 'zod';
import { signUpInformationState } from '../_recoil/atom';

const phoneRegex = /^01([0|1|6|7|8|9])([0-9]{4})([0-9]{4})$/;

const formSchema = z.object({
  telephone: z
    .string()
    .regex(phoneRegex, '올바른 휴대폰 번호 형식이 아닙니다.'),
  mbti: z.object({
    EI: z.union([z.literal('E'), z.literal('I')]),
    SN: z.union([z.literal('S'), z.literal('N')]),
    TF: z.union([z.literal('T'), z.literal('F')]),
    JP: z.union([z.literal('J'), z.literal('P')]),
  }),
});

type MBTIType = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
type MBTIObjectKey = 'mbti.EI' | 'mbti.SN' | 'mbti.TF' | 'mbti.JP';

const mbtiTypes: {
  type: MBTIType;
  typeText: string;
  objectKey: MBTIObjectKey;
}[] = [
  { type: 'E', typeText: '외향형', objectKey: 'mbti.EI' },
  { type: 'I', typeText: '내향형', objectKey: 'mbti.EI' },
  { type: 'N', typeText: '직관형', objectKey: 'mbti.SN' },
  { type: 'S', typeText: '감각형', objectKey: 'mbti.SN' },
  { type: 'F', typeText: '감정형', objectKey: 'mbti.TF' },
  { type: 'T', typeText: '사고형', objectKey: 'mbti.TF' },
  { type: 'J', typeText: '판단형', objectKey: 'mbti.JP' },
  { type: 'P', typeText: '인식형', objectKey: 'mbti.JP' },
];

export default function SignUpExtraRequiredPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [signUpInfo, setSignUpInfo] = useRecoilState(signUpInformationState);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      telephone: signUpInfo.telephone,
      mbti: {
        EI: (signUpInfo.mbti?.charAt(0) as 'E' | 'I') || 'I',
        SN: (signUpInfo.mbti?.charAt(1) as 'S' | 'N') || 'N',
        TF: (signUpInfo.mbti?.charAt(2) as 'T' | 'F') || 'F',
        JP: (signUpInfo.mbti?.charAt(3) as 'J' | 'P') || 'P',
      },
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { telephone, mbti } = values;
    if (session) {
      setSignUpInfo({
        ...signUpInfo,
        email: session.user.email,
        profileImage: session.user.profileImage,
        name: session.user.name,
        socialType: session.user.socialType,
        socialId: session.user.socialId,
      });
    } else {
      setSignUpInfo({
        ...signUpInfo,
        telephone,
        mbti: mbti.EI + mbti.SN + mbti.TF + mbti.JP,
        socialType: 'local',
      });
    }
    router.replace('/auth/signup/extra-optional');
  };

  return (
    <Form {...form}>
      <form className="flex h-full flex-col gap-5 px-10 pt-10">
        <FormField
          control={form.control}
          name="telephone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>휴대폰 번호</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="01012345678"
                  maxLength={11}
                  {...field}
                  onChange={e =>
                    form.setValue(
                      'telephone',
                      e.target.value.replace(/[^0-9]/g, ''),
                      { shouldValidate: true },
                    )
                  }
                />
              </FormControl>
              {!form.formState.errors.telephone && (
                <FormDescription>
                  하이픈(-)을 제외하고 숫자만 입력해주세요.
                </FormDescription>
              )}
              {form.formState.errors.telephone && <FormMessage />}
            </FormItem>
          )}
        />
        <span className="mt-10 text-slate-900">MBTI</span>
        <div className="grid grid-cols-2 gap-y-5">
          {mbtiTypes.map(({ type, typeText, objectKey }) => (
            <button
              key={type}
              type="button"
              onClick={() => {
                form.setValue(objectKey, type, { shouldValidate: true });
              }}
              className="flex h-fit items-center gap-3"
            >
              <div
                className={cn(
                  'flex h-[30px] w-[30px] items-center justify-center rounded-full bg-slate-400 text-slate-50 transition-colors',
                  {
                    'bg-slate-900': form.watch(objectKey) === type,
                  },
                )}
              >
                {type}
              </div>
              <span>{typeText}</span>
            </button>
          ))}
        </div>
        <p className="text-11px text-slate-500">
          모하루는 오늘의 활동 추천을 위해 MBTI를 필수로 입력받고 있어요.
          <br /> MBTI를 모르신다면 한국인 가장 흔한 유형인 INFP로 추천
          받아보세요! <br />
          MBTI는 회원가입 이후에도 자유롭게 수정할 수 있어요.
        </p>
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
