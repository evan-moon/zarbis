export enum WeatherType {
  천둥번개 = '천둥번개',
  이슬비 = '이슬비',
  비 = '비',
  눈 = '눈',
  안개 = '안개',
  맑음 = '맑음',
  구름 = '구름',
  알수없음 = '알수없음',
}

export interface WeatherCodeType {
  category: WeatherType;
  description: string;
}

export interface WeatherCodeTypeMap {
  [key: string]: WeatherCodeType;
}
