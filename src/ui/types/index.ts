import type { ReactNode } from 'react';

export type SVGImage = Record<string, () => JSX.Element>;

export type NavProps = {
  path: string;
  name: string;
};

export type SlideProps = {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

export type Children = { children: ReactNode };
