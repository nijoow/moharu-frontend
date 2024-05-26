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
import { useRouter } from 'next/navigation';

export function NeedLoginDialog({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const handleLogin = () => {
    router.push('/auth/login');
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogIcon icon="lock" />

          <DialogDescription>로그인 후 이용해주세요.</DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <Button type="button" className="w-full" onClick={handleLogin}>
            로그인 하러가기
          </Button>
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
