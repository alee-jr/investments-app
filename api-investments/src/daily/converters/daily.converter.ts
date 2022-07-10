import { DailyType } from '../dto/daily.type';

export const convertDailyResponse = (dailyResponse): DailyType[] => {
  const objectsDaily = dailyResponse['Time Series (Daily)'];
  const datesKeys = Object.keys(objectsDaily);
  const dailyValues = Object.values(objectsDaily);
  const joiningArrays: DailyType[] = dailyValues.map((object, index) => ({
    open: object['1. open'],
    high: object['2. high'],
    low: object['3. low'],
    close: object['4. close'],
    volume: object['5. volume'],
    date: datesKeys[index],
  }));
  return joiningArrays;
};
