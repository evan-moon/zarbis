const canUseLocalStorage = () => window.localStorage != null;

export function getLocalStorageData<T = unknown>(key: string): T | null {
  if (!canUseLocalStorage) {
    console.error('localstorage is not supported');
    return null;
  }
  const data = window.localStorage.getItem(key);
  return JSON.parse(data!);
}

export function setLocalStorageData<T = any>(key: string, value: T) {
  if (!canUseLocalStorage) {
    console.error('localstorage is not supported');
    return;
  }
  const stringified = JSON.stringify(value);
  return window.localStorage.setItem(key, stringified);
}
