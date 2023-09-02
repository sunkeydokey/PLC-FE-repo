import { Skeleton } from '@components/3D-Models/ThirdRobot/model/Skeleton';
import { Body } from '@components/3D-Models/ThirdRobot/model/Body';
import { Peeker } from '@components/3D-Models/ThirdRobot/model/Peeker';
import { PeekerX } from '@components/3D-Models/ThirdRobot/model/PeekerX';
import { PeekerY } from '@components/3D-Models/ThirdRobot/model/PeekerY';

export const ThirdRobot = () => {
  return (
    <>
      <Skeleton />
      <Body />
      <Peeker />
      <PeekerX />
      <PeekerY />
    </>
  );
};
