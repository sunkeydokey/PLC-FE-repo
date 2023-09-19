import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ListBulletIcon, XMarkIcon } from '@heroicons/react/20/solid';

import { category } from '@/utils/config';

import type { ReactNode } from 'react';

export const Modal = ({
  closeModal,
  date,
  title,
  setTitle,
  description,
  setDescription,
  selected,
  setSelected,
  message,
  children,
}: {
  closeModal: () => void;
  date: string;
  title: string;
  description: string;
  setTitle: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  setDescription: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  children: ReactNode;
  selected: string;
  setSelected: (value: string) => void;
  message: string;
}) => {
  return (
    <div
      onClick={closeModal}
      className='fixed inset-0 flex justify-center items-center z-50 bg-slate-600/60'>
      <section
        onClick={(event) => event.stopPropagation()}
        className='bg-slate-800 relative flex items-center mx-4 overflow-hidden w-1/2 h-3/4 rounded-xl shadow-lg py-8'>
        <button onClick={closeModal} className='absolute right-0 top-0 z-50'>
          <XMarkIcon className='fill-slate-200 w-10 h-10' />
        </button>
        <div className='grow flex flex-col items-center justify-start w-full h-full'>
          <p className='w-3/4 mt-4 px-2 text-start text-stone-200 text-lg'>
            {date}
          </p>
          <input
            placeholder='제목 없음'
            spellCheck={false}
            autoFocus
            className='mt-4 px-2 w-3/4 text-4xl text-stone-200 font-extrabold bg-inherit focus:outline-none focus:bg-inherit focus:cursor-auto hover:bg-slate-300/40 hover:cursor-pointer'
            value={title}
            onChange={setTitle}
          />
          <div className='relative mt-1 w-3/4 flex items-center text-stone-200'>
            <p className='w-1/4 text-lg text-center'>상태&nbsp;&nbsp;</p>
            <Listbox value={selected} onChange={setSelected}>
              <Listbox.Button className='relative w-full text-center cursor-default rounded-lg bg-inherit my-4 py-2 shadow-inner shadow-slate-300 text-lg hover:cursor-pointer hover:bg-slate-300/40'>
                <span className='block truncate'>{selected}</span>
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
                  {category.map((category, categoryIdx) => (
                    <Listbox.Option
                      key={categoryIdx}
                      className={({ active }) =>
                        `relative cursor-pointer text-center select-none py-2 ${
                          active
                            ? 'bg-sky-100 text-stone-800'
                            : 'text-stone-200'
                        }`
                      }
                      value={category}>
                      {({ selected }) => (
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}>
                          {category}
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
            onChange={setDescription}
          />
          <p className='h-8 w-full'>{message}</p>
          {children}
        </div>
      </section>
    </div>
  );
};
