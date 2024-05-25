import { NavigationLinkItem } from '@/app/(with-navigation)/_components/navigation-bar/navigation-link';
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

export function NeedLoginDialog({
  Icon,
  text,
  active,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  active: boolean;
}) {
  const router = useRouter();
  const handleLogin = () => {
    router.push('/auth/login');
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="col-span-1 flex h-full flex-col items-center justify-center">
          <NavigationLinkItem Icon={Icon} text={text} active={active} />
        </button>
      </DialogTrigger>
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
