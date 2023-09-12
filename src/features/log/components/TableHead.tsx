export const TableHead = ({
  values,
}: {
  values: { [key: string]: string };
}) => {
  const {
    Datetime,
    TrackId,
    Dicevalue,
    No1Action,
    No2InPoint,
    No3Motor1,
    No3Motor2,
    Start,
  } = values;
  return (
    <li className='flex justify-between border'>
      <div className='basis-auto text-center border border-stone-600 w-full'>
        {Datetime}
      </div>
      <div className='basis-auto text-center border border-stone-600 w-full'>
        {TrackId}
      </div>
      <div className='basis-auto text-center border border-stone-600 w-full'>
        {Dicevalue}
      </div>
      <div className='basis-auto text-center border border-stone-600 w-full'>
        {No1Action}
      </div>
      <div className='basis-auto text-center border border-stone-600 w-full'>
        {No2InPoint}
      </div>
      <div className='basis-auto text-center border border-stone-600 w-full'>
        {No3Motor1}
      </div>
      <div className='basis-auto text-center border border-stone-600 w-full'>
        {No3Motor2}
      </div>
      <div className='basis-auto text-center border border-stone-600 w-full'>
        {Start}
      </div>
    </li>
  );
};
