type SvgImage = {
  [key: string]: () => JSX.Element;
};

export const SVG = ({ name }: { name: string }) => {
  const svgImage: SvgImage = {
    DashBoard: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-10 h-10 mx-auto my-auto'
        viewBox='0 0 1024 1024'>
        <path fill='#39393A' d='M928.1 881v44H95.9V99h44v782z'></path>
        <path
          fill='#39393A'
          d='M352 435.7v403.4H204V435.7h148m22-22H182v447.4h192V413.7zm234-105.8v531.2H460V307.9h148m22-22H438v575.2h192V285.9z'></path>
        <path
          fill='#E73B37'
          d='M866.1 177.3v663.9H714V177.3h152.1m20-20H694v703.9h192V157.3h.1z'></path>
      </svg>
    ),

    Control: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='800'
        height='800'
        className='w-10 h-10 mx-auto my-auto'
        viewBox='0 0 1024 1024'>
        <path
          fill='#E73B37'
          d='M501.3 676.9a10 10 0 1020 0 10 10 0 10-20 0z'></path>
        <path
          fill='#39393A'
          d='M960 756V138.5H64V756h320.1v85.5H256.2v44h511.9v-44h-128V756H960zM108 182.5h808v427.1H108V182.5zm488.1 659h-168V756h168v85.5zM108 712v-82.5h808V712H108z'></path>
        <path
          fill='#E73B37'
          d='M167.536 327.703l90.72-90.721 14.143 14.142-90.721 90.72zm5.423 95.766l181.159-181.16 14.142 14.143L187.1 437.61z'></path>
      </svg>
    ),

    Log: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='800'
        height='800'
        className='w-10 h-10 mx-auto my-auto'
        viewBox='0 0 1024 1024'>
        <path
          fill='#39393A'
          d='M716 190.9v-67.8h-44v67.8H352v-67.8h-44v67.8H92v710h840v-710H716zm-580 44h172v69.2h44v-69.2h320v69.2h44v-69.2h172v151.3H136V234.9zm752 622H136V402.2h752v454.7z'></path>
        <path
          fill='#E73B37'
          d='M286 565.7a33 33 0 1066 0 33 33 0 10-66 0zM477 565.7a33 33 0 1066 0 33 33 0 10-66 0zM668.1 565.7a33 33 0 1066 0 33 33 0 10-66 0zM286 693.4a33 33 0 1066 0 33 33 0 10-66 0zM477 693.4a33 33 0 1066 0 33 33 0 10-66 0zM668.1 693.4a33 33 0 1066 0 33 33 0 10-66 0z'></path>
      </svg>
    ),

    Profile: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='800'
        height='800'
        className='w-10 h-10 mx-auto my-auto'
        viewBox='0 0 1024 1024'>
        <path
          fill='#E73B37'
          d='M502 616.2a10 10 0 1020 0 10 10 0 10-20 0zM501.6 656.9a10 10 0 1020 0 10 10 0 10-20 0zM502.4 697.7a10 10 0 1020 0 10 10 0 10-20 0z'></path>
        <path
          fill='#39393A'
          d='M512 130.8c42.1 0 81.7 16.4 111.5 46.2s46.2 69.4 46.2 111.5-16.4 81.7-46.2 111.5c-29.8 29.8-69.4 46.2-111.5 46.2s-81.7-16.4-111.5-46.2c-29.8-29.8-46.2-69.4-46.2-111.5s16.4-81.7 46.2-111.5 69.4-46.2 111.5-46.2m0-44c-111.4 0-201.6 90.3-201.6 201.6C310.4 399.8 400.7 490 512 490c111.4 0 201.6-90.3 201.6-201.6S623.3 86.8 512 86.8zm.3 436.7L84 681.4v255.7h856V681.4L512.3 523.5zM896 893.1H128V712.6l384.3-142.4L896 712.6v180.5z'></path>
        <path
          fill='#E73B37'
          d='M555.4 585.3l-1.4-.5v159.9c0 11.7-4.8 22.3-12.4 30-7.7 7.7-18.3 12.4-30 12.4-23.4 0-42.4-19-42.4-42.4V585.3l-1.4.5-14.6 5.2v153.8c0 32.2 26.2 58.4 58.4 58.4S570 777 570 744.8V590.5l-14.6-5.2z'></path>
      </svg>
    ),
  };

  return <>{name && svgImage[name]()}</>;
};