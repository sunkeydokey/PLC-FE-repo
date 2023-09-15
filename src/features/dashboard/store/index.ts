import { format, startOfToday } from 'date-fns';
import { atom, selector } from 'recoil';

export const globalStartDate = atom({
  key: 'globalStartDate',
  default: startOfToday(),
});

export const globalEndDate = atom({
  key: 'globalEndDate',
  default: startOfToday(),
});

export const showAllAtom = atom({
  key: 'showAllAtom',
  default: true,
});

export const parsedGlobalStartDate = selector<string>({
  key: 'parsedGlobalStartDate',
  get: ({ get }) => {
    const date = get(globalStartDate);
    return format(date, 'yyyy-MM-dd');
  },
});

export const parsedGlobalEndDate = selector({
  key: 'parsedGlobalEndDate',
  get: ({ get }) => {
    const date = get(globalEndDate);
    return format(date, 'yyyy-MM-dd');
  },
});
