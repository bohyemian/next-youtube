import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
// await sleep(1000)

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.ceil(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function getRandomElementFromArray(arr: any[]) {
  return arr[getRandomInt(0, arr.length - 1)];
}

// export function chunkArray<T>(arr: T[], chunkSize: number) {
export const chunkArray = <T>(arr: T[], chunkSize: number = 1) => {
  const resultArray = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    resultArray.push(arr.slice(i, i + chunkSize));
  }

  return resultArray;
};

export const generateRandomHex = () => {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
};
