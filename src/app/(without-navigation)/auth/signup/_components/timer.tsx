import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';

const Timer = ({
  time,
  setTime,
}: {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}) => {
  let min: number;
  let sec: number;
  let timer: any;
  let currTime = time;
  min = Math.floor(time / 60);
  sec = time % 60;

  useEffect(() => {
    if (currTime > 0) {
      timer = setInterval(() => {
        currTime -= 1;

        setTime(time - 1);
        min = Math.floor(currTime / 60);
        sec = currTime % 60;

        if (currTime === 0) {
          setTime(0);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [time]);

  return (
    <span className={cn('text-sm', { 'text-red-400': time <= 0 })}>
      {min}:{sec < 10 ? `0${sec}` : sec}
    </span>
  );
};

export default Timer;
