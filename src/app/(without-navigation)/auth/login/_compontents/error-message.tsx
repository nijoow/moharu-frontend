'use client';

import { useEffect } from 'react';

const ErrorMessage = ({ error }: { error?: string }) => {
  useEffect(() => {
    console.error(error);
  }, []);

  return (
    <span className="mx-auto mb-1 text-center text-13px text-red-500">
      로그인 과정에서 문제가 발생하였습니다. <br />
      잠시후 다시 시도해주세요.
    </span>
  );
};

export default ErrorMessage;
