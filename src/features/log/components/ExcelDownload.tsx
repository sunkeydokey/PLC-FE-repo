import { useCallback, useEffect, useState } from 'react';
import { utils, writeFileXLSX } from 'xlsx';

import { LogColumns } from '@/features/log/types';

export const ExcelDownload = ({ data }: { data: LogColumns[][] }) => {
  const [excelData, setExcelData] = useState<LogColumns[]>(data.flat());

  useEffect(() => {
    setExcelData(data.flat());
  }, [data]);

  const exportFile = useCallback(() => {
    const ws = utils.json_to_sheet(excelData);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Data');
    writeFileXLSX(wb, 'logs.xlsx');
  }, [excelData]);

  return (
    <section className='flex justify-end items-center mr-4'>
      <button
        className='px-4 mb-4 text-lg text-stone-200 border rounded-md font-bold hover:bg-stone-200 hover:text-inherit'
        onClick={exportFile}>
        다운로드
      </button>
    </section>
  );
};
