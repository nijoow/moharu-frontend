import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogIcon,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';
import { Activity } from '@/types/type';
import React from 'react';
import BackgroundImageWithPlaceholder from '../common/background-image-with-placeholder';

export function ShareDialog({
  activity,
  triggerComponent,
}: {
  activity: Activity;
  triggerComponent: React.ReactNode;
}) {
  const moharuHomepageUrl = 'https://www.moharu.site';
  const activityUrl = `${moharuHomepageUrl}/activities/${activity.id}`;

  const onCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(activityUrl);
      toast({
        description: '링크 복사 완료!',
      });
    } catch (err) {
      toast({
        description: '링크 복사 실패',
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerComponent}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogIcon icon="link" />
          <DialogDescription>
            모하루의 추천 활동을 다른 사람과 공유해보세요!
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full items-center gap-3">
          <BackgroundImageWithPlaceholder
            src={activity.coverImage}
            className="h-20 w-20 flex-none rounded-lg bg-slate-500"
          />
          <div className="flex flex-auto flex-col">
            <h4 className="text-20px font-bold">모하루</h4>
            <p className="w-auto break-all text-12px text-slate-500">
              {activityUrl}
            </p>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" className="w-full" onClick={onCopyLink}>
              링크 복사
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
