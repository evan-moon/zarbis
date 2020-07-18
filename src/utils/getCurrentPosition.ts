export function getCurrentPosition(): Promise<Position | null> {
  return new Promise((resolve, reject) => {
    if (window.navigator == null || window.navigator.geolocation == null) {
      reject('geolocation API is not supported');
    }
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      e => reject(e),
      {
        maximumAge: 60000,
        timeout: 7000,
      }
    );
  });
}
