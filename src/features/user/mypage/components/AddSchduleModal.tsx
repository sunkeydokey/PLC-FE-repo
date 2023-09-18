import { Fragment, useCallback, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ListBulletIcon } from '@heroicons/react/20/solid';

const category = [
  { category: 1, name: '중요' },
  { category: 2, name: '행사' },
  { category: 3, name: '회의' },
  { category: 4, name: '일정' },
  { category: 5, name: '완료' },
];

export const AddSchduleModal = ({
  closeModal,
  date,
}: {
  closeModal: () => void;
  date: string;
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selected, setSelected] = useState(category[0]);

  const handleTitleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    },
    [title],
  );
  const handledescriptionChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(event.target.value);
    },
    [description],
  );

  return (
    <div
      onClick={closeModal}
      className='fixed inset-0 flex justify-center items-center z-50 bg-slate-600/60'>
      <section
        onClick={(event) => event.stopPropagation()}
        className='bg-slate-800 flex items-center mx-4 overflow-hidden w-1/2 h-3/4 rounded-xl shadow-lg py-8'>
        <div className='grow flex flex-col items-center justify-start w-full h-full'>
          <p className='w-3/4 mt-4 text-start text-stone-200 text-lg'>{date}</p>
          <input
            placeholder='제목 없음'
            autoFocus
            className='mt-4 px-2 w-3/4 text-4xl text-stone-200 font-extrabold bg-inherit focus:outline-none focus:bg-inherit focus:cursor-auto hover:bg-slate-300/40 hover:cursor-pointer'
            value={title}
            onChange={handleTitleChange}
          />
          <div className='relative mt-1 w-3/4 flex items-center text-stone-200'>
            <p className='w-1/4 text-lg text-center'>상태&nbsp;&nbsp;</p>
            <Listbox value={selected} onChange={setSelected}>
              <Listbox.Button className='relative w-full text-center cursor-default rounded-lg bg-inherit my-4 py-2 shadow-inner shadow-slate-300 text-lg hover:cursor-pointer hover:bg-slate-300/40'>
                <span className='block truncate'>{selected.name}</span>
                <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                  <ListBulletIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'>
                <Listbox.Options className='absolute right-0 top-2 mt-1 max-h-60 w-1/3 overflow-auto rounded-md bg-slate-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {category.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-pointer text-center select-none py-2 ${
                          active
                            ? 'bg-sky-100 text-stone-800'
                            : 'text-stone-200'
                        }`
                      }
                      value={person}>
                      {({ selected }) => (
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}>
                          {person.name}
                        </span>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </Listbox>
          </div>
          <textarea
            spellCheck={false}
            className='w-3/4 px-2 text-2xl mb-4 grow resize-none text-stone-200 no-underline font-semibold bg-inherit focus:outline-none focus:bg-inherit focus:cursor-auto hover:bg-slate-300/40 hover:cursor-pointer'
            name='text-area'
            value={description}
            onChange={handledescriptionChange}
          />
          <div className='flex w-full justify-center items-center'>
            <button>추가</button>
            <button onClick={closeModal}>취소</button>
          </div>
        </div>
      </section>
    </div>
  );
};
