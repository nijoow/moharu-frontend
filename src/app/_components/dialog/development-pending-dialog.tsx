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
import { ChevronRight } from 'lucide-react';

export function DevelopmentPendingDialog({ name }: { name: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex cursor-pointer">
          <p className="mb-8px">{name}</p>
          <ChevronRight width={24} height={24} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogIcon icon="alert-triangle" />

          <DialogDescription>추후 개발 예정입니다.</DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" className="w-full" variant="outline">
              돌아가기
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
