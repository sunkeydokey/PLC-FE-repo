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
    <li className='grid grid-cols-8 border'>
      <div className='basis-auto text-center border border-stone-600 w-full break-words'>
        {Datetime}
      </div>
      <div className='basis-auto text-center border border-stone-600 w-full break-words'>
        {TrackId}
      </div>
      <div className='basis-auto text-center border border-stone-600 w-full break-words'>
        {Dicevalue}
      </div>
      <div className='basis-auto text-center border border-stone-600 w-full break-words'>
        {No1Action}
      </div>
      <div className='basis-auto text-center border border-stone-600 w-full break-words'>
        {No2InPoint}
      </div>
      <div className='basis-auto text-center border border-stone-600 w-full break-words'>
        {No3Motor1}
      </div>
      <div className='basis-auto text-center border border-stone-600 w-full break-words'>
        {No3Motor2}
      </div>
      <div className='basis-auto text-center border border-stone-600 w-full break-words'>
        {Start}
      </div>
    </li>
  );
};
