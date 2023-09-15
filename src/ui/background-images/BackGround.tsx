import { ReactNode } from 'react';

export const BackGround = ({
  file,
  children,
}: {
  file: string;
  children: ReactNode | null;
}) => {
  return (
    <div
      className={`bg-[url("/background-image/${file}")] bg-no-repeat bg-cover w-full h-full`}>
      {children}
    </div>
  );
};
