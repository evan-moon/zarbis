import { useState, useCallback } from 'react';
import { getLocalStorageData, setLocalStorageData } from 'src/utils/localStorage';
import { addSeconds } from 'date-fns';

/**
 * @desc 상태를 로컬스토리지에 캐싱하고, expiry(초)의 만료기간을 부여한다. 만약 훅이 호출되었을 때 캐시가 남아있다면 캐싱된 값을 반환한다.
 */
export function useStateWithLocalCache<T>(initialValue: T, cacheKey: string, expiry?: number): [T, (s: T) => void] {
  const [state, setState] = useState(getLocalStorageData<T>(cacheKey) ?? initialValue);

  const setStateWithCache = useCallback(
    (newState: T) => {
      setState(newState);
      setLocalStorageData(cacheKey, newState, expiry ? addSeconds(new Date(), expiry) : undefined);
    },
    [cacheKey, expiry]
  );

  return [state, setStateWithCache];
}
