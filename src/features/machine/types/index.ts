export interface MachineProps {
  scale: number;
  platePusher: number;
  dicePusher: number;
  peekAngle: number;
  peekHeight: number;
}

export interface MachineWithBelt extends MachineProps {
  isOnMove: boolean;
}

export interface MachineParts {
  [key: string]: number;
}
