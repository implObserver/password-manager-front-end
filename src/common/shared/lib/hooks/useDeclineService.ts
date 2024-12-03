import { useMemo } from 'react';

export const useDeclineService = (count: number): string => {
  return useMemo(() => {
    if (count === 1) {
      return `${count} сервис`;
    } else if (count > 1 && count < 5) {
      return `${count} сервиса`;
    } else {
      return `${count} сервисов`;
    }
  }, [count]);
};