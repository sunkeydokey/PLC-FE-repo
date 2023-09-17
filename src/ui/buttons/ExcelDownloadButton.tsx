import { useCallback } from 'react';
import { utils, writeFileXLSX } from 'xlsx';

type Data = {
  [key: string]: string | number;
};

export const ExcelDownloadButton = ({ data }: { data: Data[][] }) => {
  const exportFile = useCallback(() => {
    const ws = utils.json_to_sheet(data.flat());
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Data');
    writeFileXLSX(wb, 'logs.xlsx');
  }, [data]);

  return (
    <button
      className='px-4 mb-4 text-lg text-stone-200 bg-stone-600/60 rounded-md border-2 font-bold hover:text-stone-200 hover:bg-sky-600/60 hover:scale-110'
      onClick={exportFile}>
      다운로드
    </button>
  );
};
