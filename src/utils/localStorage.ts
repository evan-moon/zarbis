import { isBefore } from 'date-fns';

const canUseLocalStorage = () => window.localStorage != null;

export function getLocalStorageData<T = unknown>(key: string): T | null {
  if (!canUseLocalStorage) {
    console.error('localstorage is not supported');
    return null;
  }

  const rawData = window.localStorage.getItem(key);
  if (rawData == null) {
    return null;
  }

  const data = JSON.parse(rawData!);
  if (data.expiry) {
    const now = new Date();
    const expiry = new Date(data.expiry);
    return isBefore(now, expiry) ? data.value : null;
  } else {
    return data.value;
  }
}

export function setLocalStorageData<T = any>(key: string, value: T, expiry?: Date) {
  if (!canUseLocalStorage) {
    console.error('localstorage is not supported');
    return;
  }

  const data = {
    value,
    ...(() => (expiry ? { expiry: expiry.toISOString() } : {}))(),
  };

  return window.localStorage.setItem(key, JSON.stringify(data));
}
