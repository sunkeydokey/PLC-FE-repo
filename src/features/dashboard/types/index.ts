export type Data = {
  Datetime: string;
  defect?: number;
  normal?: number;
  radiation?: number;
  dice?: number;
  TrackId?: number;
  first?: number;
  second?: number;
  third?: number;
};

export type Graph = {
  title: string;
  start: string;
  end: string;
  height: string;
};
