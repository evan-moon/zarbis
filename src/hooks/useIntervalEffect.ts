import { useEffect } from 'react';

export function useIntervalEffect(fn: () => void, intervalTime: number) {
  useEffect(() => {
    const interval = setInterval(fn, intervalTime);
    return () => clearInterval(interval);
  }, [fn, intervalTime]);
}
