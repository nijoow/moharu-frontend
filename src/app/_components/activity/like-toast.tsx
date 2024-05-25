import { toast } from '@/components/ui/use-toast';

interface LikeToastProps {
  isWish: boolean;
  id: number;
}

export const LikeToast = ({ isWish, id }: LikeToastProps) => {
  const message = isWish
    ? '좋아요를 취소하여 위시리스트에서 삭제되었습니다.'
    : '좋아요 성공! 위시리스트에 추가되었습니다.';

  toast({
    description: message,
  });
};
